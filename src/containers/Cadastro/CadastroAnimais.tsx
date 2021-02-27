import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { FunctionComponent, useLayoutEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AddAnimalCard } from '../../components/AddAnimalCard/AddAnimalCard';
import { HeaderCadastro } from '../../components/HeaderCadastro/HeaderCadastro';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { Animal, Genero, TipoAnimal } from '../../models/Animal';
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
		// 	navigation.navigate('CadastroEndereco');
		// }
	}

	const onAddAnimal = () => {
			navigation.navigate('CadastroNovoAnimal');
	}

	const animais: Array<Animal> = [
		{
			nome: 'Fuzzy',
			idade: 3,
			raca: 'SRD',
			descricao: 'Querida',
			tipo_animal: TipoAnimal.GATO,
			genero: Genero.FEMEA
		},
		{
			nome: 'Pantera',
			idade: 1,
			raca: 'São Bernardo',
			descricao: 'Perigoso',
			tipo_animal: TipoAnimal.CACHORRO,
			genero: Genero.MACHO
		}
	]

	return (
		<ScrollView contentContainerStyle={styles.mainContainerAnimais}>
			<RoundedButton 
				onPress={onAddAnimal}
				label={'+ Animal'}
				theme={'secondary'}
				style={styles.alignSelfEnd}
				small
			/>
			<View style={[styles.fullWidthContainer , styles.mediumPaddingVertical]}>
				<AddAnimalCard animal={animais[0]}/>
				<AddAnimalCard animal={animais[1]} />
			</View>
			<RoundedButton
				onPress={onContinuar}
				label={'Continuar'}
				progressButton
			/>
		</ScrollView>
	);
};
