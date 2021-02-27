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
import { usuarioActions } from '../../store/usuario';
import styles from './CadastroStyles';

interface IProps { }

interface IState {
	formValues: {
		descricao: string;
		preco: number;
	};
	formErrors: {
		[name: string]: string | null;
	};
}

export const CadastroDadosProfissionais: FunctionComponent<IProps> = () => {
	const inputRefs: { [field: string]: MutableRefObject<IRefFloatingLabel> } = {
		descricao: useRef(null),
		preco: useRef(null),
	};

	const navigation = useNavigation();
	const [{ usuario }, dispatch] = useStore();

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <HeaderCadastro {...props} userType={usuario.tipo_usuario} screenStep={'Dados Profissionais'}/>,
		});
	}, [navigation]);


	const initialState: IState = {
		formValues: {
			descricao: usuario.descricao,
			preco: usuario.preco
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
		} else {
			onContinuar();
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
			const newUsuario = {
				descricao: formValues.descricao,
				preco: inputRefs['preco'].current.getRawValue()
			}
			dispatch(usuarioActions.setUsuario(newUsuario));
			navigation.navigate('CadastroLogin');
		}
	}

	return (
		<ScrollView contentContainerStyle={styles.mainContainer}>
			<FloatingLabelInput
				ref={inputRefs['descricao']}
				placeholder={'Sobre mim'}
				value={formValues['descricao']}
				error={formErrors['descricao']}
				isFieldCorrect={_.isEmpty(formErrors['descricao'])}
				maxLength={200}
				onChangeText={(value: string) => onChangeFormValue('descricao', value)}
				onSubmitEditing={() => onEndEditingField('descricao')}
				multiline={'big'}
			/>
			<FloatingLabelInput
				ref={inputRefs['preco']}
				label={'Preço por hora'}
				value={formValues['preco']}
				error={formErrors['preco']}
				mask={'money'}
				maxLength={15}
				keyboardType={'numeric'}
				isFieldCorrect={_.isEmpty(formErrors['preco'])}
				onChangeText={(value: string) => onChangeFormValue('preco', value)}
				returnKeyType={'done'}
				onSubmitEditing={() => onEndEditingField('preco')}
			/>
			<RoundedButton
				onPress={onContinuar}
				label={'Continuar'}
				progressButton
			/>
		</ScrollView>
	);
};
