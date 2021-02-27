import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { FunctionComponent, useLayoutEffect } from 'react';
import { Alert, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AddAnimalCard } from '../../components/AddAnimalCard/AddAnimalCard';
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
		if (usuario.animais.length === 0) {
			valid = false;
		}
		return valid;
	};

	const onContinuar = () => {
		if (validateFields()) {
			navigation.navigate('CadastroLogin');
		} else {
			Alert.alert(
				"Alerta",
				"Você precisa adicionar pelo menos um animal!",
				[
					{ text: "OK" }
				],
				{ cancelable: false }
			);
		}
	}

	const onAddAnimal = () => {
			navigation.navigate('CadastroNovoAnimal');
	}

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
				{usuario.animais.length === 0 && <Text style={[styles.alignSelfCenter, styles.text.cardTitle]}>Nenhum animal adicionado!</Text>}
				{usuario.animais.map((animal, i) => <AddAnimalCard animal={animal} key={i} index={i}/>)}
			</View>
			<RoundedButton
				onPress={onContinuar}
				label={'Continuar'}
				progressButton
			/>
		</ScrollView>
	);
};
