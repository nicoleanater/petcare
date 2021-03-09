import moment from 'moment';
import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { MaskService } from 'react-native-masked-text';
import { Avaliacao } from '../../models/Avaliacao';
import { ImageGradientPicker } from '../ImageGradientPicker/ImageGradientPicker';
import { RatingStars } from '../RatingStars/RatingStars';
import styles from './CardAvaliacaoStyles';

interface IProps {
	avaliacao: Avaliacao;
}

export const CardAvaliacao: FunctionComponent<IProps> = ( { avaliacao }) => {

	return (
		<View style={styles.cardContainer}>
			<View style={styles.avaliacaoHeader}>
				<ImageGradientPicker
					image={avaliacao.usuario_avaliador.foto}
					small
				/>
				<View style={styles.headerTextView}>
					<View style={styles.headerLeft}>
						<Text style={styles.usuarioNomeText}>{avaliacao.usuario_avaliador.nome}</Text>
						<RatingStars rating={avaliacao.nota} size={'medium'}/>
					</View>
					<Text style={styles.dateText}>{MaskService.toMask('datetime', moment(avaliacao.data, 'YYYY-MM-DD').format('DD/MM/YYYY'), { format: 'DD/MM/YYYY' })}</Text>
				</View>
			</View>
			<Text style={styles.descricaoText}>{avaliacao.descricao}</Text>
		</View>
	);
};
