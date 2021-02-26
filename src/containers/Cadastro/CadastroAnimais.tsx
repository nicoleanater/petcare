import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { FunctionComponent, useLayoutEffect } from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderCadastro } from '../../components/HeaderCadastro/HeaderCadastro';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { useStore } from '../../store';
import styles from './CadastroStyles';

interface IProps { }

export const CadastroAnimais: FunctionComponent<IProps> = () => {
	const navigation = useNavigation();
	const [{ usuario }, dispatch] = useStore();

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <HeaderCadastro {...props} userType={usuario.tipo} screenStep={'Animais'}/>,
		});
	}, [navigation]);

	const validateFields = () => {
		let valid = true;
		// Object.entries(formValues).forEach(([key, value]) => {
		// 	if (key != 'complemento' && _.isEmpty(value)) {
		// 		dispatchErrorUpdate({field: key, value: 'obrigatório'})
		// 		valid = false;
		// 	}
		// });
		return valid;
	};

	const onContinuar = () => {
		// if (validateFields()) {
		// 	const usuario = { endereco: formValues };
		// 	dispatch(usuarioActions.setUsuario(usuario));
		// 	// 	navigation.navigate('CadastroEndereco');
		// }
	}

	const onAddAnimal = () => {

	}

	return (
		<ScrollView contentContainerStyle={styles.mainContainer}>
			<RoundedButton 
				onPress={onAddAnimal}
				label={'+ Animal'}
				theme={'secondary'}
				small
			/>
			<RoundedButton
				onPress={onContinuar}
				label={'Continuar'}
				progressButton
			/>
		</ScrollView>
	);
};
