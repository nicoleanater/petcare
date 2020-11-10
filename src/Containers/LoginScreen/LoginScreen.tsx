import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import React, { FunctionComponent, MutableRefObject, useRef } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FloatingLabelInput, { IRefFloatingLabel } from '../../components/FloatingLabelInput/FloatingLabelInput';
import { useForm } from '../../hooks';
import { Colors, Images } from '../../themes';
import styles from './LoginScreenStyles';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { login } from '../../services/usuario';
import { validateEmail } from '../../utils/ValidationForms';

interface IState {
	formValues: {
		email: string;
		senha: string;
	};
	formErrors: {
		[name: string]: string | null;
	};
}3

const LoginScreen: FunctionComponent<any> = () => {
	const inputRefs: { [field: string]: MutableRefObject<IRefFloatingLabel> } = {
		email: useRef(null),
		senha: useRef(null)
	};
	const navigation = useNavigation();

	const initialState: IState = {
		formValues: {
			email: '',
			senha: '',
		},
		formErrors: {}
	};

	const [formState, dispatchFormUpdate] = useForm(initialState.formValues);
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
			// submit button
		}
	};

	const validateFields = () => {
		let valid = true;
		Object.entries(formState).forEach(([key, value]) => {
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
				const res = await login(formState);
				console.log({res});
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
							value={formState['email']}
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
							value={formState['senha']}
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
					</View>
				</LinearGradient>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

export default LoginScreen;
