import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { useEffect, FunctionComponent, useState, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthHeader } from '../../components/AuthHeader/AuthHeader';
import { CustomPicker, transformArrayIntoPickerOptions, Option } from '../../components/CustomPicker/CustomPicker';
import { useForm } from '../../hooks';
import { Cidade } from '../../models/Cidade';
import { Estado } from '../../models/Estado';
import { buscaCidades } from '../../services/cidade';
import { buscaEstados } from '../../services/estado';
import { useStore } from '../../store';
import styles from './PesquisarScreenStyles';

interface IProps { }

interface IState {
	estados: Array<Option<Estado>>;
	cidades: Array<Option<Cidade>>;
	formValues: {
		uf: Estado;
		cidade: Cidade;
	}
}

export const PesquisarScreen: FunctionComponent<IProps> = () => {
	const [{ usuario }, dispatch] = useStore();
	const navigation = useNavigation();

	const initialState: IState = {
		estados: [],
		cidades: [],
		formValues: {
			uf: null,
			cidade: null
		}
	};

	const [estados, setEstados] = useState(initialState.estados);
	const [cidades, setCidades] = useState(initialState.cidades);
	const [formValues, dispatchFormUpdate] = useForm(initialState.formValues);

	const onChangeFormValue = (field: string, value: any) => {
		if (field === 'uf') {
			loadCidadesCombobox(value.id);
		}
		dispatchFormUpdate({field, value});
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <AuthHeader {...props} title={"Pesquisar"} theme={'light'} />,
		});
	}, [navigation]);



	useEffect(() => {
		loadEstadosCombobox();
	}, []);

	const loadEstadosCombobox = async () => {
		try {
			const res = await buscaEstados();
			setEstados(transformArrayIntoPickerOptions(res.data, 'sigla'));
		} catch (error) {
			console.error({ error });
		}
	}

	const loadCidadesCombobox = async (estadoId) => {
		try {
			const res = await buscaCidades(estadoId);
			setCidades(transformArrayIntoPickerOptions(res.data, 'descricao'));
		} catch (error) {
			console.error({error});
		}
	}

	return (
		<ScrollView contentContainerStyle={styles.mainContainer}>
			<View style={styles.row}>
				<CustomPicker<Estado>
					label={'UF'}
					onSelect={(value) => onChangeFormValue('uf', value)}
					value={formValues['uf']}
					list={estados}
					mainContainerStyle={{flex: 2, marginRight: 10}}
				/>
				<CustomPicker<Cidade>
					label={'Cidade'}
					onSelect={(value) => onChangeFormValue('cidade', value)}
					value={formValues['cidade']}
					list={cidades}
					mainContainerStyle={{flex: 3}}
				/>
			</View>
		</ScrollView>
	);
};
