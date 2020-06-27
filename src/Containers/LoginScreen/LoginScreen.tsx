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

interface IState {
	formValues: {
		email: string;
		password: string;
	};
	formErrors: {
		[name: string]: string | null;
	};
}3

const LoginScreen: FunctionComponent<any> = () => {
	const inputRefs: { [field: string]: MutableRefObject<IRefFloatingLabel> } = {
		email: useRef(null),
		password: useRef(null)
	};
	const emailRef: MutableRefObject<IRefFloatingLabel> = useRef(null);
	const navigation = useNavigation();

	const initialState: IState = {
		formValues: {
			email: '',
			password: '',
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
							ref={inputRefs['password']}
							label={'Senha'}
							value={formState['password']}
							error={formErrors['password']}
							isFieldCorrect={_.isEmpty(formErrors['password'])}
							maxLength={60}
							icon={{ name: 'lock' }}
							onChangeText={(value: string) => onChangeFormValue('password', value)}
							returnKeyType={'done'}
							secureTextEntry={true}
							onSubmitEditing={() => onEndEditingField('email')}
						/>
						<RoundedButton
							onPress={() => console.log('oi')}
							label={'Entrar'}
						/>
					</View>
				</LinearGradient>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

export default LoginScreen;
