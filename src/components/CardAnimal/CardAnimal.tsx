import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { Animal, TipoAnimal } from '../../models/Animal';
import { Images } from '../../themes';
import { getGenero, getTipoAnimal, renderPluralAnimais } from '../../utils/StringUtils';
import { ImageGradientPicker } from '../ImageGradientPicker/ImageGradientPicker';
import styles from './CardAnimalStyles';

interface IProps {
	animal: Animal;
}

export const CardAnimal: FunctionComponent<IProps> = ({ animal }) => {
	return (
		<View style={styles.cardContainer}>
		<View style={styles.animalHeader}>
			<ImageGradientPicker
				image={animal.tipo_animal === TipoAnimal.GATO ? Images.catPlaceholder : Images.dogPlaceholder}
				small
			/>
			<View style={styles.headerTextView}>
				<View style={styles.headerLeft}>
					<Text style={styles.animalNomeText}>{animal.nome}</Text>
					<Text style={styles.animalTipoSexoText}>{`${getTipoAnimal(animal.tipo_animal)} ${getGenero(animal.genero)}`}</Text>
				</View>
				<View style={styles.headerRight}>
					<Text style={styles.idadeRacaText}>{animal.idade} {renderPluralAnimais(animal.idade, 'ano')}</Text>
					<Text style={styles.idadeRacaText}>{animal.raca}</Text>
				</View>
			</View>
		</View>
		<Text style={styles.descricaoText}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor dapibus augue a accumsan. Aenean finibus, lacus sit amet ultrices mollis, justo magna imperdiet urna, eget pretium neque purus quis nisl.'}</Text>
	</View>
	);
};
