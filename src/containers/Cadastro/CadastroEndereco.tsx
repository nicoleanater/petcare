import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import _ from 'lodash';
import React, { FunctionComponent, MutableRefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CustomPicker, transformArrayIntoPickerOptions } from '../../components/CustomPicker/CustomPicker';
import FloatingLabelInput, { IRefFloatingLabel } from '../../components/FloatingLabelInput/FloatingLabelInput';
import { HeaderCadastro } from '../../components/HeaderCadastro/HeaderCadastro';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { useForm } from '../../hooks';
import { Cidade } from '../../models/Cidade';
import { Estado } from '../../models/Estado';
import { buscaCidades } from '../../services/cidade';
import { buscaEstados } from '../../services/estado';
import { useStore } from '../../store';
import { usuarioActions } from '../../store/usuario';
import styles from './CadastroStyles';

interface IProps { }

interface IState {
	formValues: {
		cep: string;
		rua: string;
		numero: number;
		bairro: string;
		complemento: string;
		uf: Estado;
		cidade: Cidade;
	};
	formErrors: {
		[name: string]: string | null;
	};
}

export const CadastroEndereco: FunctionComponent<IProps> = () => {
	const inputRefs: { [field: string]: MutableRefObject<IRefFloatingLabel> } = {
		cep: useRef(null),
		rua: useRef(null),
		numero: useRef(null),
		bairro: useRef(null),
		complemento: useRef(null)
	};

	const navigation = useNavigation();
	const [{ usuario }, dispatch] = useStore();
	const [estados, setEstados] = useState([]);
	const [cidades, setCidades] = useState([]);

	useEffect(() => {
		loadEstadosCombobox();
	}, []);

	const loadEstadosCombobox = async () => {
		try {
			const res = await buscaEstados();
			setEstados(transformArrayIntoPickerOptions(res.data, 'sigla'));
		} catch (error) {
			console.error({error});
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

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <HeaderCadastro {...props} userType={usuario.tipo_usuario} screenStep={'Endereço'}/>,
		});
	}, [navigation]);


	const initialState: IState = {
		formValues: {
			cep: usuario.endereco?.cep,
			rua: usuario.endereco?.rua,
			numero: usuario.endereco?.numero,
			bairro: usuario.endereco?.bairro,
			complemento: usuario.endereco?.complemento,
			uf: usuario.endereco?.cidade.estado,
			cidade: usuario.endereco?.cidade
		},
		formErrors: {}
	};

	const [formValues, dispatchFormUpdate] = useForm(initialState.formValues);
	const [formErrors, dispatchErrorUpdate] = useForm(initialState.formErrors);

	const onChangeFormValue = (field: string, value: any) => {
		if (field === 'uf') {
			loadCidadesCombobox(value.id);
		}
		dispatchFormUpdate({field, value});
		dispatchErrorUpdate({field, value: null});
	};
	
	const onEndEditingField = (key: string) => {
		const refsKeys: string[] = Object.keys(inputRefs);
		const nextInputKey: string = refsKeys[refsKeys.indexOf(key) + 1];
		
		if (!_.isEmpty(nextInputKey)) {
			inputRefs[nextInputKey].current.focus();
		}
	};

	const validateFields = () => {
		let valid = true;
		Object.entries(formValues).forEach(([key, value]) => {
			if (key != 'complemento' && _.isEmpty(value)) {
				dispatchErrorUpdate({field: key, value: 'obrigatório'})
				valid = false;
			} else if (key === 'cep' && !validateCEP()) {
				dispatchErrorUpdate({field: key, value: 'cep inválido'})
				valid = false;
			}
		});
		return valid;
	};

	const validateCEP = () => {
		return inputRefs['cep'].current.isValid();
	}

	const onContinuar = () => {
		if (validateFields()) {
			const usuario = { 
				endereco: {
					...formValues,
					cep: inputRefs['cep'].current.getRawValue()
				}
			};
			dispatch(usuarioActions.setUsuario(usuario));
			navigation.navigate('CadastroAnimais');
		}
	}

	return (
		<ScrollView contentContainerStyle={styles.mainContainer}>
			<FloatingLabelInput
				ref={inputRefs['cep']}
				label={'CEP'}
				value={formValues['cep']}
				error={formErrors['cep']}
				mask={'zip-code'}
				isFieldCorrect={_.isEmpty(formErrors['cep'])}
				onChangeText={(value: string) => onChangeFormValue('cep', value)}
				returnKeyType={'next'}
				onSubmitEditing={() => onEndEditingField('cep')}
			/>
			<FloatingLabelInput
				ref={inputRefs['rua']}
				label={'Rua'}
				value={formValues['rua']}
				error={formErrors['rua']}
				isFieldCorrect={_.isEmpty(formErrors['rua'])}
				maxLength={60}
				onChangeText={(value: string) => onChangeFormValue('rua', value)}
				returnKeyType={'next'}
				onSubmitEditing={() => onEndEditingField('rua')}
			/>
			<View style={styles.row}>
				<FloatingLabelInput
					ref={inputRefs['numero']}
					label={'Número'}
					value={formValues['numero']}
					error={formErrors['numero']}
					keyboardType={'numeric'}
					isFieldCorrect={_.isEmpty(formErrors['numero'])}
					maxLength={10}
					onChangeText={(value: string) => onChangeFormValue('numero', value)}
					returnKeyType={'next'}
					onSubmitEditing={() => onEndEditingField('numero')}
					viewStyle={{flex: 2, marginRight: 10}}
				/>
				<FloatingLabelInput
					ref={inputRefs['bairro']}
					label={'Bairro'}
					value={formValues['bairro']}
					error={formErrors['bairro']}
					isFieldCorrect={_.isEmpty(formErrors['bairro'])}
					maxLength={60}
					onChangeText={(value: string) => onChangeFormValue('bairro', value)}
					returnKeyType={'next'}
					onSubmitEditing={() => onEndEditingField('bairro')}
					viewStyle={{flex: 3}}
				/>
			</View>
			<FloatingLabelInput
				ref={inputRefs['complemento']}
				label={'Complemento'}
				value={formValues['complemento']}
				error={formErrors['complemento']}
				isFieldCorrect={_.isEmpty(formErrors['complemento'])}
				maxLength={60}
				onChangeText={(value: string) => onChangeFormValue('complemento', value)}
				returnKeyType={'next'}
				onSubmitEditing={() => onEndEditingField('complemento')}
				viewStyle={{flex: 3}}
			/>
			<View style={styles.row}>
				<CustomPicker<Estado>
					label={'UF'}
					onSelect={(value) => onChangeFormValue('uf', value)}
					value={formValues['uf']}
					list={estados}
					error={formErrors['uf']}
					mainContainerStyle={{flex: 2, marginRight: 10}}
				/>
				<CustomPicker<Cidade>
					label={'Cidade'}
					onSelect={(value) => onChangeFormValue('cidade', value)}
					value={formValues['cidade']}
					list={cidades}
					error={formErrors['cidade']}
					mainContainerStyle={{flex: 3}}
				/>
			</View>
			<RoundedButton
				onPress={onContinuar}
				label={'Continuar'}
				progressButton
			/>
		</ScrollView>
	);
};
