import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Usuario } from '../../models/Usuario';
import { ImageGradientPicker } from '../ImageGradientPicker/ImageGradientPicker';
import styles from './CardPetsitterStyles';
interface IProps {
	usuario: Usuario;
}

interface IState {
	// State type definition
}

export const CardPetSitter: FunctionComponent<IProps> = ({ usuario }) => {

	usuario = {
		"email": "joanadark@email.com",
		"endereco_id": 0,
		"foto": "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",
		"id": 19,
		"nome": "Joanna Dark",
		"nota_media": 0.0,
		"tipo_usuario": "PET_SITTER",
		"descricao": "Eu sou muito atenciosa",
		"endereco": {
			"bairro": "Centro",
			"cep": "55555555",
			"cidade": {descricao: "Curitiba", estado: {sigla: "PR"}},
			"numero": 5,
			"rua": "Av. Teste",
			"uf": 0
		},
		"preco": 32.5
	}

	const initialState: IState = {
	};

	const openPetsitterDetails = () => {
		//todo
	}

	return (
		<TouchableOpacity onPress={openPetsitterDetails} style={styles.cardContainer}>
			<ImageGradientPicker
				image={usuario.foto}
				small
			/>
			<View style={styles.textInfoContainer}>
				<Text style={[styles.text.cardTitle, styles.xSmallMarginBottom]}>{usuario.nome}</Text>
				<Text style={[styles.text.cardContent, styles.xSmallMarginBottom]}>{`${usuario.endereco.cidade.descricao} - ${usuario.endereco.cidade.estado.sigla}`}</Text>
				<Text style={[styles.text.cardContent, styles.xSmallMarginBottom]}>{usuario.endereco.bairro}</Text>
			</View>
			<View></View>
		</TouchableOpacity>
	);
};
