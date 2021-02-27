import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import _ from 'lodash';
import React, { FunctionComponent, MutableRefObject, useLayoutEffect, useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import FloatingLabelInput, { IRefFloatingLabel } from '../../components/FloatingLabelInput/FloatingLabelInput';
import { HeaderCadastro } from '../../components/HeaderCadastro/HeaderCadastro';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { useForm } from '../../hooks';
import { useStore } from '../../store';
import { validateEmail } from '../../utils/ValidationForms';
import styles from './CadastroStyles';

interface IProps { }

interface IState {
	formValues: {
		email: string;
		senha: string;
		confirme_senha: string;
	};
	formErrors: {
		[name: string]: string | null;
	};
}

export const CadastroLogin: FunctionComponent<IProps> = () => {
	const inputRefs: { [field: string]: MutableRefObject<IRefFloatingLabel> } = {
		email: useRef(null),
		senha: useRef(null),
		confirme_senha: useRef(null)
	};

	const navigation = useNavigation();
	const [{ usuario }, dispatch] = useStore();

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <HeaderCadastro {...props} userType={usuario.tipo} screenStep={'Dados de Login'} />,
		});
	}, [navigation]);


	const initialState: IState = {
		formValues: {
			email: '',
			senha: '',
			confirme_senha: ''
		},
		formErrors: {}
	};

	const [formValues, dispatchFormUpdate] = useForm(initialState.formValues);
	const [formErrors, dispatchErrorUpdate] = useForm(initialState.formErrors);

	const onChangeFormValue = (field: string, value: any) => {
		dispatchFormUpdate({ field, value });
		dispatchErrorUpdate({ field, value: null });
	};

	const onEndEditingField = (key: string) => {
		const refsKeys: string[] = Object.keys(inputRefs);
		const nextInputKey: string = refsKeys[refsKeys.indexOf(key) + 1];

		if (!_.isEmpty(nextInputKey)) {
			inputRefs[nextInputKey].current.focus();
		} else {
			onSalvar();
		}
	};

	const validateFields = () => {
		let valid = true;
		Object.entries(formValues).forEach(([key, value]) => {
			if (_.isEmpty(value)) {
				dispatchErrorUpdate({ field: key, value: 'obrigatório' })
				valid = false;
			} else if (key === 'email' && !validateEmail(value)) {
				dispatchErrorUpdate({field: key, value: 'email inválido'})
				valid = false;
			} else if (key === 'senha' && formValues['senha'] !== formValues['confirme_senha']) {
				dispatchErrorUpdate({field: 'senha', value: 'senhas não correspondem'})
				dispatchErrorUpdate({field: 'confirme_senha', value: 'senhas não correspondem'})
			}
		});
		return valid;
	};

	const onSalvar = () => {
		if (validateFields()) {
			// const usuario = { 
			// 	...formValues ,
			// 	tipo_animal: formValues.tipo_animal.id,
			// 	genero: formValues.genero.id,
			// };

			// dispatch(usuarioActions.addAnimal(animal));
			// navigation.navigate('CadastroAnimais');
		}
	}

	return (
		<ScrollView contentContainerStyle={styles.mainContainer}>
			<FloatingLabelInput
				ref={inputRefs['email']}
				label={'Email'}
				value={formValues['email']}
				error={formErrors['email']}
				isFieldCorrect={_.isEmpty(formErrors['email'])}
				maxLength={60}
				onChangeText={(value: string) => onChangeFormValue('email', value)}
				keyboardType={'email-address'}
				returnKeyType={'next'}
				onSubmitEditing={() => onEndEditingField('email')}
			/>
			<FloatingLabelInput
				ref={inputRefs['senha']}
				label={'Senha'}
				value={formValues['senha']}
				error={formErrors['senha']}
				isFieldCorrect={_.isEmpty(formErrors['senha'])}
				maxLength={60}
				onChangeText={(value: string) => onChangeFormValue('senha', value)}
				returnKeyType={'next'}
				secureTextEntry={true}
				onSubmitEditing={() => onEndEditingField('senha')}
			/>
			<FloatingLabelInput
				ref={inputRefs['confirme_senha']}
				label={'Confirme sua senha'}
				value={formValues['confirme_senha']}
				error={formErrors['confirme_senha']}
				isFieldCorrect={_.isEmpty(formErrors['confirme_senha'])}
				maxLength={60}
				onChangeText={(value: string) => onChangeFormValue('confirme_senha', value)}
				returnKeyType={'done'}
				secureTextEntry={true}
				onSubmitEditing={() => onEndEditingField('confirme_senha')}
			/>
			<RoundedButton
				onPress={onSalvar}
				label={'Salvar'}
			/>
		</ScrollView>
	);
};
