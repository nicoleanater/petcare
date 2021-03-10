import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaskService } from 'react-native-masked-text';
import { TipoUsuario, Usuario } from '../../models/Usuario';
import { renderAnimaisText } from '../../utils/StringUtils';
import { ImageGradientPicker } from '../ImageGradientPicker/ImageGradientPicker';
import { RatingStars } from '../RatingStars/RatingStars';
import styles from './CardUsuarioStyles';
interface IProps {
	usuario: Usuario;
}

export const CardUsuario: FunctionComponent<IProps> = ({ usuario }) => {
	const navigation = useNavigation();

	const openPerfilUsuario = () => {
		navigation.push('Perfil', { usuarioPerfil: usuario } );
	}

	const renderPrice = () => {
		return MaskService.toMask('money', usuario.preco.toFixed(2), { unit: 'R$ '});
	}

	const renderUserTextDetails = () => {
		if (usuario.tipo_usuario === TipoUsuario.PET_SITTER) {
			return (<>
				<Text style={[styles.text.cardContent, styles.xSmallMarginBottom]}>{`${usuario.endereco.cidade.descricao} - ${usuario.endereco.cidade.estado.sigla}`}</Text>
				<Text style={[styles.text.cardContent, styles.xSmallMarginBottom]}>{usuario.endereco.bairro}</Text>
			</>);
		}

		if (usuario.tipo_usuario === TipoUsuario.DONO_DE_ANIMAL){
			return (<>
				<Text style={[styles.text.cardContent, styles.xSmallMarginBottom]}>{renderAnimaisText(usuario.animais)}</Text>
			</>);
		}
	}

	return (
		<TouchableOpacity onPress={openPerfilUsuario} style={styles.cardContainer}>
			<ImageGradientPicker
				image={usuario.foto}
				small
			/>
			<View style={styles.rightContainer}>
				<View style={styles.textInfoContainer}>
					<Text style={[styles.text.cardTitle, styles.xSmallMarginBottom]}>{usuario.nome}</Text>
					{renderUserTextDetails()}
				</View>
				<RatingStars rating={usuario.nota_media} amount={usuario.qtde_avaliacoes} size={'small'}/>
			</View>
			{usuario.tipo_usuario === TipoUsuario.PET_SITTER &&
				<View style={styles.priceContainer}>
					<Text style={styles.text.priceText}>{renderPrice()}</Text>
					<Text style={[styles.text.unitText, styles.xSmallMarginLeft]}>/ hora</Text>
				</View>
			}
		</TouchableOpacity>
	);
};
