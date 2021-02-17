import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { FunctionComponent, MutableRefObject, useLayoutEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import FloatingLabelInput, { IRefFloatingLabel } from '../../components/FloatingLabelInput/FloatingLabelInput';
import { HeaderCadastro } from '../../components/HeaderCadastro/HeaderCadastro';
import { ImageGradientPicker } from '../../components/ImageGradientPicker/ImageGradientPicker';
import { useForm } from '../../hooks';
import { useStore } from '../../store';
import styles from './CadastroDadosPessoaisStyles';
import _ from 'lodash';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { ScrollView } from 'react-native-gesture-handler';
import { usuarioActions } from '../../store/usuario';
import moment from 'moment';

interface IProps { }
interface IState {
	formValues: {
		foto: string;
		nome: string;
		sobrenome: string;
		data_nasc: string;
		celular: string;
	};
	formErrors: {
		[name: string]: string | null;
	};
}

export const CadastroDadosPessoais: FunctionComponent<IProps> = () => {
	const inputRefs: { [field: string]: MutableRefObject<IRefFloatingLabel> } = {
		nome: useRef(null),
		sobrenome: useRef(null),
		data_nasc: useRef(null),
		celular: useRef(null),
	};

	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <HeaderCadastro {...props} userType={state.usuario.tipo} screenStep={'Dados Pessoais'}/>,
		});
	}, [navigation]);

	const [state, dispatch] = useStore();
	const initialState: IState = {
		formValues: {
			foto: null,
			nome: '',
			sobrenome: '',
			data_nasc: '',
			celular: ''
		},
		formErrors: {}
	};
	const [formValues, dispatchFormUpdate] = useForm(initialState.formValues);
	const [formErrors, dispatchErrorUpdate] = useForm(initialState.formErrors);

	const onChangeFormValue = (field: string, value: string) => {
		dispatchFormUpdate({field, value});
		dispatchErrorUpdate({field, value: null});
	};
	
	const onEndEditingField = (key: string) => {
		const refsKeys: string[] = Object.keys(inputRefs);
		const nextInputKey: string = refsKeys[refsKeys.indexOf(key) + 1];
		
		if (!_.isEmpty(nextInputKey)) {
			inputRefs[nextInputKey].current.focus();
		} else {
			onContinuar();
		}
	};

	const validateFields = () => {
		let valid = true;
		Object.entries(formValues).forEach(([key, value]) => {
			if (key != 'foto' && _.isEmpty(value)) {
				dispatchErrorUpdate({field: key, value: 'obrigatório'})
				valid = false;
			} else if (key === 'celular' && !validateCelular(value)) {
				dispatchErrorUpdate({field: key, value: 'celular inválido'})
				valid = false;
			} else if (key === 'data_nasc' && !validateDate(value)) {
				dispatchErrorUpdate({field: key, value: 'data inválida'})
				valid = false;
			}
		});

		return valid;
	};

	const validateCelular = (numero: string) => {
		return inputRefs['celular'].current.isValid();;
	}

	const validateDate = (date: string) => {
		const dateValid = inputRefs['data_nasc'].current.isValid();
		const dateInThePast = moment(date, 'DD/MM/YYYY').isBefore();
		return dateValid && dateInThePast;
	}

	const onContinuar = () => {
		if (validateFields()) {
			const usuario = {
				...formValues,
				celular: inputRefs['celular'].current.getRawValue(),
				data_nasc: inputRefs['data_nasc'].current.getRawValue()
				
			}
			dispatch(usuarioActions.setUsuario(usuario));
				// navigation.navigate('');
		}
	}


    return (
			<ScrollView contentContainerStyle={styles.mainContainer}>
				<ImageGradientPicker isPicker image={formValues['foto']} pickerCallback={(value) => onChangeFormValue('foto', value)}/>
				<FloatingLabelInput
						ref={inputRefs['nome']}
						label={'Nome'}
						value={formValues['nome']}
						error={formErrors['nome']}
						isFieldCorrect={_.isEmpty(formErrors['nome'])}
						maxLength={60}
						onChangeText={(value: string) => onChangeFormValue('nome', value)}
						returnKeyType={'next'}
						onSubmitEditing={() => onEndEditingField('nome')}
					/>
					<FloatingLabelInput
						ref={inputRefs['sobrenome']}
						label={'Sobrenome'}
						value={formValues['sobrenome']}
						error={formErrors['sobrenome']}
						isFieldCorrect={_.isEmpty(formErrors['sobrenome'])}
						maxLength={60}
						onChangeText={(value: string) => onChangeFormValue('sobrenome', value)}
						returnKeyType={'next'}
						onSubmitEditing={() => onEndEditingField('sobrenome')}
					/>
					<FloatingLabelInput
						ref={inputRefs['data_nasc']}
						label={'Data de Nascimento'}
						value={formValues['data_nasc']}
						error={formErrors['data_nasc']}
						mask={'datetime'}
						maskOptions={{format: 'DD/MM/YYYY'}}
						isFieldCorrect={_.isEmpty(formErrors['data_nasc'])}
						maxLength={60}
						onChangeText={(value: string) => onChangeFormValue('data_nasc', value)}
						returnKeyType={'next'}
						onSubmitEditing={() => onEndEditingField('data_nasc')}
					/>
					<FloatingLabelInput
						ref={inputRefs['celular']}
						label={'Celular'}
						value={formValues['celular']}
						error={formErrors['celular']}
						mask={'cel-phone'}
						isFieldCorrect={_.isEmpty(formErrors['celular'])}
						maxLength={60}
						onChangeText={(value: string) => onChangeFormValue('celular', value)}
						returnKeyType={'next'}
						onSubmitEditing={() => onEndEditingField('celular')}
					/>
					<RoundedButton
						onPress={onContinuar}
						label={'Continuar'}
						progressButton
					/>
			</ScrollView>
    );
};
