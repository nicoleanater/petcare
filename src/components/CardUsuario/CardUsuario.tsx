import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaskService } from 'react-native-masked-text';
import { Usuario } from '../../models/Usuario';
import { ImageGradientPicker } from '../ImageGradientPicker/ImageGradientPicker';
import { RatingStars } from '../RatingStars/RatingStars';
import styles from './CardUsuarioStyles';
interface IProps {
	usuario: Usuario;
}

export const CardUsuario: FunctionComponent<IProps> = ({ usuario }) => {

	const openPetsitterDetails = () => {
		//todo
	}

	const renderPrice = () => {
		return MaskService.toMask('money', usuario.preco.toFixed(2), { unit: 'R$ '});
	}

	return (
		<TouchableOpacity onPress={openPetsitterDetails} style={styles.cardContainer}>
			<ImageGradientPicker
				image={usuario.foto}
				small
			/>
			<View style={styles.rightContainer}>
				<View style={styles.textInfoContainer}>
					<Text style={[styles.text.cardTitle, styles.xSmallMarginBottom]}>{usuario.nome}</Text>
					<Text style={[styles.text.cardContent, styles.xSmallMarginBottom]}>{`${usuario.endereco.cidade.descricao} - ${usuario.endereco.cidade.estado.sigla}`}</Text>
					<Text style={[styles.text.cardContent, styles.xSmallMarginBottom]}>{usuario.endereco.bairro}</Text>
				</View>
				<RatingStars rating={usuario.nota_media} amount={usuario.qtde_avaliacoes} size={'small'}/>
			</View>
			<View style={styles.priceContainer}>
				<Text style={styles.text.priceText}>{renderPrice()}</Text>
				<Text style={[styles.text.unitText, styles.xSmallMarginLeft]}>/ hora</Text>
			</View>
		</TouchableOpacity>
	);
};
