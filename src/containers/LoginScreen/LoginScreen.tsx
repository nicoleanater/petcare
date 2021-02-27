import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import React, { FunctionComponent, MutableRefObject, useRef } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FloatingLabelInput, { IRefFloatingLabel } from '../../components/FloatingLabelInput/FloatingLabelInput';
import { useForm } from '../../hooks';
import { Colors, Images } from '../../themes';
import styles from './LoginScreenStyles';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { login } from '../../services/usuario';
import { validateEmail } from '../../utils/ValidationForms';
import { useStore } from '../../store';
import { usuarioActions } from '../../store/usuario';

interface IProps { }
interface IState {
	formValues: {
		email: string;
		senha: string;
	};
	formErrors: {
		[name: string]: string | null;
	};
}

export const LoginScreen: FunctionComponent<IProps> = () => {
	const inputRefs: { [field: string]: MutableRefObject<IRefFloatingLabel> } = {
		email: useRef(null),
		senha: useRef(null)
	};

	const initialState: IState = {
		formValues: {
			email: '',
			senha: '',
		},
		formErrors: {}
	};

	const [formValues, dispatchFormUpdate] = useForm(initialState.formValues);
	const [formErrors, dispatchErrorUpdate] = useForm(initialState.formErrors);
	const navigation = useNavigation();
	const [state, dispatch] = useStore();
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
			onLoginSubmit();
		}
	};

	const validateFields = () => {
		let valid = true;
		Object.entries(formValues).forEach(([key, value]) => {
			if (_.isEmpty(value)) {
				dispatchErrorUpdate({field: key, value: 'obrigatório'})
				valid = false;
			} else if (key === 'email' && !validateEmail(value)) {
				dispatchErrorUpdate({field: key, value: 'email inválido'})
				valid = false;
			}
		});

		return valid;
};

	const onLoginSubmit = async () => {
		if (validateFields()) {
			try {
				const res = await login(formValues);
				dispatch(usuarioActions.setUsuario(res.data));
				// navigation.navigate('');
			} catch (error) {
				console.error({error});
			}
		}
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<KeyboardAvoidingView contentContainerStyle={styles.fullContainer}>
				<LinearGradient colors={[Colors.gradientPink, Colors.gradientPeach]}>
					<View style={styles.mainContainer}>
						<Image source={Images.petCareLogo} style={styles.marginBottom} />
						<FloatingLabelInput
							ref={inputRefs['email']}
							label={'Email'}
							value={formValues['email']}
							error={formErrors['email']}
							isFieldCorrect={_.isEmpty(formErrors['email'])}
							maxLength={60}
							icon={{ name: 'email' }}
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
							icon={{ name: 'lock' }}
							onChangeText={(value: string) => onChangeFormValue('senha', value)}
							returnKeyType={'done'}
							secureTextEntry={true}
							onSubmitEditing={() => onEndEditingField('senha')}
						/>
						<RoundedButton
							onPress={onLoginSubmit}
							label={'Entrar'}
						/>
						<View style={styles.registerContainer}>
							<Text style={styles.createAccountText}>Não possui uma conta? </Text>
							<TouchableOpacity onPress={() => navigation.navigate('TipoCadastro')}><Text style={styles.registerLink}>Cadastre-se!</Text></TouchableOpacity>
						</View>
					</View>
				</LinearGradient>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};
