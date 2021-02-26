import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import _ from 'lodash';
import React, { FunctionComponent, MutableRefObject, useLayoutEffect, useRef } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FloatingLabelInput, { IRefFloatingLabel } from '../../components/FloatingLabelInput/FloatingLabelInput';
import { HeaderCadastro } from '../../components/HeaderCadastro/HeaderCadastro';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { useForm } from '../../hooks';
import { useStore } from '../../store';
import styles from './CadastroEnderecoStyles';

interface IProps { }

interface IState {
	formValues: {
		cep: string;
		rua: string;
		numero: number;
		bairro: string;
		complemento: string;
		uf: number;
		cidade: number;
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
		complemento: useRef(null),
		uf: useRef(null),
		cidade: useRef(null)
	};

	const navigation = useNavigation();
	const [{ usuario }, dispatch] = useStore();

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <HeaderCadastro {...props} userType={usuario.tipo} screenStep={'Endereço'}/>,
		});
	}, [navigation]);


	const initialState: IState = {
		formValues: {
			cep: usuario.endereco?.cep,
			rua: usuario.endereco?.rua,
			numero: usuario.endereco?.numero,
			bairro: usuario.endereco?.bairro,
			complemento: usuario.endereco?.complemento,
			uf: usuario.endereco?.cidade.estado.id,
			cidade: usuario.endereco?.cidade.id
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
		// Object.entries(formValues).forEach(([key, value]) => {
		// 	if (key != 'foto' && _.isEmpty(value)) {
		// 		dispatchErrorUpdate({field: key, value: 'obrigatório'})
		// 		valid = false;
		// 	} else if (key === 'celular' && !validateCelular()) {
		// 		dispatchErrorUpdate({field: key, value: 'celular inválido'})
		// 		valid = false;
		// 	} else if (key === 'data_nasc' && !validateDate()) {
		// 		dispatchErrorUpdate({field: key, value: 'data inválida'})
		// 		valid = false;
		// 	}
		// });

		return valid;
	};

	const onContinuar = () => {
		// if (validateFields()) {
		// 	const usuario = {
		// 		...formValues,
		// 		celular: inputRefs['celular'].current.getRawValue(),
		// 		data_nasc: inputRefs['data_nasc'].current.getRawValue()
				
		// 	}
		// 	dispatch(usuarioActions.setUsuario(usuario));
		// 		navigation.navigate('CadastroEndereco');
		// }
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
				<Picker
					selectedValue={'java'}
					style={{height: 50, width: 100}}
					onValueChange={(itemValue, itemIndex) =>
						onChangeFormValue('uf', itemValue)
					}>
					<Picker.Item label="Java" value="java" />
					<Picker.Item label="JavaScript" value="js" />
				</Picker>
				<RoundedButton
					onPress={onContinuar}
					label={'Continuar'}
					progressButton
				/>
			</ScrollView>
    );
};
