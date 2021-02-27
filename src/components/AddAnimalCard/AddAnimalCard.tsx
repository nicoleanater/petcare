import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animal, TipoAnimal } from '../../models/Animal';
import { Images } from '../../themes';
import { ImageGradientPicker } from '../ImageGradientPicker/ImageGradientPicker';
import styles from './AddAnimalCardStyles';

interface IProps {
  animal: Animal;
}

export const AddAnimalCard: FunctionComponent<IProps> = ({ animal }) => {
	const navigation = useNavigation();

	const renderAnimalTypeAndGender = () => {
		let typeAndGender = '';
		switch (animal.tipo_animal){
			case 'GATO': typeAndGender += 'Gato'; break;
			case 'CACHORRO': typeAndGender += 'Cachorro'; break;
		}
		switch (animal.genero){
			case 'FEMEA': typeAndGender += ' Fêmea'; break;
			case 'MACHO': typeAndGender += ' Macho'; break;
		}
		return typeAndGender;
	}

	const renderAnimalAge = () => {
		let age = `${animal.idade} `
		if (animal.idade === 1) {
			age += ' ano';
		} else {
			age += ' anos';
		}
		return age;
	}

	const onEditPressed = () => {
		navigation.navigate('CadastroNovoAnimal', { animalEdit: animal } );
	}

	const onRemovePressed = () => {
		// remove the animal from store
	}


	return (
		<View style={styles.cardContainer}>
			<ImageGradientPicker 
				image={animal.tipo_animal === TipoAnimal.GATO ? Images.catPlaceholder : Images.dogPlaceholder}
				small
			/>
			<View style={styles.textContainer}>
				<View style={styles.verticalCenterAlignedColumn}>
					<Text style={[styles.text.cardTitle, styles.smallMarginBottom]}>{animal.nome}</Text>
					<Text style={[styles.text.cardContent, { marginBottom: 3 }]}>{renderAnimalTypeAndGender()}</Text>
					<Text style={[styles.text.cardContent, { marginBottom: 3 }]}>{renderAnimalAge()}</Text>
				</View>
				<View>
					<TouchableOpacity onPress={onEditPressed}>
						<Icon name={'edit'} style={styles.iconStyle} size={28}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={onRemovePressed}>
						<Icon name={'remove-circle-outline'} style={styles.iconStyle} size={28}/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
