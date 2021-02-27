import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import _ from 'lodash';
import React, { FunctionComponent, MutableRefObject, useLayoutEffect, useRef } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CustomPicker, EnumPicker, transformArrayIntoPickerOptions, transformEnumOptionIntoPickerOption } from '../../components/CustomPicker/CustomPicker';
import FloatingLabelInput, { IRefFloatingLabel } from '../../components/FloatingLabelInput/FloatingLabelInput';
import { HeaderCadastro } from '../../components/HeaderCadastro/HeaderCadastro';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { useForm } from '../../hooks';
import { Animal, Genero, TipoAnimal } from '../../models/Animal';
import { useStore } from '../../store';
import { usuarioActions } from '../../store/usuario';
import styles from './CadastroStyles';

interface IProps {
	route: {
		params?: {
			animalEdit?: Animal;
			index?: number;
		}
	}
}

interface IState {
	formValues: {
		nome: string;
		idade: number;
		raca: string;
		descricao: string;
		tipo_animal: EnumPicker;
		genero: EnumPicker;
	};
	formErrors: {
		[name: string]: string | null;
	};
}

const tiposAnimal: Array<EnumPicker> = [
	{id: TipoAnimal.GATO, descricao: 'Gato'},
	{id: TipoAnimal.CACHORRO, descricao: 'Cachorro'}
];

const generos: Array<EnumPicker> = [
	{id: Genero.FEMEA, descricao: 'Fêmea'},
	{id: Genero.MACHO, descricao: 'Macho'}
];

export const CadastroNovoAnimal: FunctionComponent<IProps> = ({ route }) => {
	const inputRefs: { [field: string]: MutableRefObject<IRefFloatingLabel> } = {
		nome: useRef(null),
		idade: useRef(null),
		raca: useRef(null),
		descricao: useRef(null),
	};

	const navigation = useNavigation();
	const animalEdit = route.params?.animalEdit;
	const index = route.params?.index;	
	const [{ usuario }, dispatch] = useStore();

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <HeaderCadastro {...props} userType={usuario.tipo} screenStep={'Novo Animal'}/>,
		});
	}, [navigation]);


	const initialState: IState = {
		formValues: {
			nome: animalEdit ? animalEdit.nome : '',
			idade: animalEdit ? animalEdit.idade : null,
			raca: animalEdit ? animalEdit.raca : '',
			descricao: animalEdit ? animalEdit.descricao : '',
			tipo_animal: animalEdit ? transformEnumOptionIntoPickerOption(tiposAnimal, animalEdit.tipo_animal) : null,
			genero: animalEdit ? transformEnumOptionIntoPickerOption(generos, animalEdit.genero) : null,
		},
		formErrors: {}
	};

	const [formValues, dispatchFormUpdate] = useForm(initialState.formValues);
	const [formErrors, dispatchErrorUpdate] = useForm(initialState.formErrors);

	const onChangeFormValue = (field: string, value: any) => {
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
			if (_.isEmpty(value)) {
				dispatchErrorUpdate({field: key, value: 'obrigatório'})
				valid = false;
			}
		});
		return valid;
	};

	const onContinuar = () => {
		if (validateFields()) {
			const animal = { 
				...formValues ,
				tipo_animal: formValues.tipo_animal.id,
				genero: formValues.genero.id,
			};
			if (animalEdit) {
				dispatch(usuarioActions.editAnimal(animal, index));
			} else {
				dispatch(usuarioActions.addAnimal(animal));
			}
			navigation.navigate('CadastroAnimais');
		}
	}

	return (
		<ScrollView contentContainerStyle={styles.mainContainer}>
			<FloatingLabelInput
				ref={inputRefs['nome']}
				label={'Nome'}
				value={formValues['nome']}
				error={formErrors['nome']}
				isFieldCorrect={_.isEmpty(formErrors['nome'])}
				maxLength={50}
				onChangeText={(value: string) => onChangeFormValue('nome', value)}
				returnKeyType={'next'}
				onSubmitEditing={() => onEndEditingField('nome')}
			/>
			<CustomPicker<EnumPicker>
					label={'Tipo'}
					onSelect={(value) => onChangeFormValue('tipo_animal', value)}
					value={formValues['tipo_animal']}
					list={transformArrayIntoPickerOptions(tiposAnimal, 'descricao')}
					error={formErrors['tipo_animal']}
				/>
			<View style={styles.row}>
				<CustomPicker<EnumPicker>
					label={'Sexo'}
					onSelect={(value) => onChangeFormValue('genero', value)}
					value={formValues['genero']}
					list={transformArrayIntoPickerOptions(generos, 'descricao')}
					error={formErrors['genero']}
					mainContainerStyle={{flex: 3, marginRight: 10}}
				/>
				<FloatingLabelInput
					ref={inputRefs['idade']}
					label={'Idade'}
					value={formValues['idade']}
					error={formErrors['idade']}
					keyboardType={'numeric'}
					isFieldCorrect={_.isEmpty(formErrors['idade'])}
					maxLength={3}
					onChangeText={(value: string) => onChangeFormValue('idade', value)}
					returnKeyType={'next'}
					onSubmitEditing={() => onEndEditingField('idade')}
					viewStyle={{flex: 2}}
				/>
			</View>
			<FloatingLabelInput
				ref={inputRefs['raca']}
				label={'Raça'}
				value={formValues['raca']}
				error={formErrors['raca']}
				isFieldCorrect={_.isEmpty(formErrors['raca'])}
				maxLength={50}
				onChangeText={(value: string) => onChangeFormValue('raca', value)}
				returnKeyType={'next'}
				onSubmitEditing={() => onEndEditingField('raca')}
				viewStyle={{flex: 3}}
			/>
			<FloatingLabelInput
				ref={inputRefs['descricao']}
				placeholder={'Descreva seu animal: \npersonalidade, preferências, comportamento, etc.'}
				value={formValues['descricao']}
				error={formErrors['descricao']}
				isFieldCorrect={_.isEmpty(formErrors['descricao'])}
				maxLength={200}
				onChangeText={(value: string) => onChangeFormValue('descricao', value)}
				onSubmitEditing={() => onEndEditingField('descricao')}
				multiline={'medium'}
			/>
			<RoundedButton
				onPress={onContinuar}
				label={'Salvar'}
			/>
		</ScrollView>
	);
};
