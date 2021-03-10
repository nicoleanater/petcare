import { useNavigation } from '@react-navigation/core';
import moment from 'moment-timezone';
import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Mensagem } from '../../models/Mensagem';
import { useStore } from '../../store';
import { ImageGradientPicker } from '../ImageGradientPicker/ImageGradientPicker';
import styles from './CardChatStyles';

interface IProps {
	mensagem: Mensagem;
}


export const CardChat: FunctionComponent<IProps> = ({ mensagem }) => {
	const navigation = useNavigation();
	const [{ usuario }] = useStore();

	const openChatDetails = (otherUserId: number) => {
		navigation.navigate('MensagensDetails', { currentUserId: usuario.id, otherUserId })
	}

	const getHoraMensagem = (data: string) => {
		const dateTimeUTC = moment(data, 'YYYY-MM-DDTHH:mm:ss').format();
		const dateTimeLocal = moment(dateTimeUTC).tz('America/Sao_Paulo').format('hh:mm A');
		return dateTimeLocal;
	}

	return (
		<TouchableOpacity onPress={() => openChatDetails(mensagem.usuario.id)} style={styles.cardContainer}>
			<ImageGradientPicker
				image={mensagem.usuario.foto}
				small
			/>
			<View style={styles.textContainer}>
				<Text style={[styles.text.cardTitle, styles.smallMarginBottom, { maxWidth: 165 }]}>{mensagem.usuario.nome}</Text>
				<Text style={styles.messageTextStyle}>{mensagem.texto}</Text>
			</View>
			<Text style={styles.horaTextStyle}>{getHoraMensagem(mensagem.data)}</Text>
		</TouchableOpacity>
	);
};
