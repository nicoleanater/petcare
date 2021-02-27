import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import _ from 'lodash';
import React, { FunctionComponent, MutableRefObject, useLayoutEffect, useRef } from 'react';
import { Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FloatingLabelInput, { IRefFloatingLabel } from '../../components/FloatingLabelInput/FloatingLabelInput';
import { HeaderCadastro } from '../../components/HeaderCadastro/HeaderCadastro';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { useForm } from '../../hooks';
import { salvarUsuario } from '../../services/usuario';
import { useStore } from '../../store';
import { usuarioActions } from '../../store/usuario';
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
			header: (props: StackHeaderProps) => <HeaderCadastro {...props} userType={usuario.tipo_usuario} screenStep={'Dados de Login'} />,
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
				valid = false;
			}
		});
		return valid;
	};

	const onSalvar = async () => {
		if (validateFields()) {
			const newUsuario = {
				...usuario,
				nome: `${usuario.nome} ${usuario.sobrenome}`,
				email: formValues.email,
				senha: formValues.senha,
				endereco: {
					...usuario.endereco,
					uf: usuario.endereco.cidade.estado.id,
					cidade:  usuario.endereco.cidade.id
				}
			}
			delete newUsuario.id;
			delete newUsuario.nota_media;
			delete newUsuario.sobrenome;
			// clean state after
			// dispatch(usuarioActions.setUsuario(newUsuario));
			try {
				const res = await salvarUsuario(newUsuario);
				// dispatch(usuarioActions.setUsuario(res.data));
				Alert.alert(
					"Sucesso",
					"Seu usuário foi criado com sucesso!",
					[
						{ text: "OK", onPress: () => navigation.navigate('Login')}
					],
					{ cancelable: false }
				);
			} catch (error) {
				console.error({error});
			}
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
