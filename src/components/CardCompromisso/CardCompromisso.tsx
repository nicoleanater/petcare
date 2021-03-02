import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaskService } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Compromisso } from '../../models/Compromisso';
import { TipoUsuario } from '../../models/Usuario';
import { getCompromissoStatus, getStatusColor, renderAnimaisText } from '../../utils/StringUtils';
import styles from './CardCompromissoStyles';

interface IProps {
	compromisso: Compromisso;
}

export const CardCompromisso: FunctionComponent<IProps> = ({ compromisso }) => {
	const { tipo_usuario } = compromisso.usuario;
	const navigation = useNavigation();

	const openCompromissoDetails = () => {
		navigation.navigate('DetalhesCompromisso', {id: compromisso.id});
	}

	const renderDateInterval = () => `${moment(compromisso.data_inicio, 'YYYY-MM-DD').format('DD/MM/YY')} - ${moment(compromisso.data_fim, 'YYYY-MM-DD').format('DD/MM/YY')}`;

	const renderPreco = () => `${MaskService.toMask('money', compromisso.usuario.preco.toFixed(2), { unit: 'R$ '})} / hora`;

	return (
		<TouchableOpacity style={styles.cardContainer} onPress={openCompromissoDetails}>
			<View style={styles.cardLeftContainer}>
				<View>
					<Text style={[styles.text.cardTitle, styles.smallMarginBottom]}>{compromisso.usuario.nome}</Text>
					<View style={styles.row}>
						<Icon name={'access-time'} style={styles.iconStyle} size={14}/>
						<Text style={[styles.text.cardContent, styles.xSmallMarginBottom]}>{renderDateInterval()}</Text>
					</View>
					{ tipo_usuario === TipoUsuario.DONO_DE_ANIMAL &&
						<View style={styles.row}>
							<Icon name={'pets'} style={styles.iconStyle} size={14}/>
							<Text style={[styles.text.cardContent, styles.xSmallMarginBottom]}>{renderAnimaisText(compromisso.usuario.animais)}</Text>
						</View>
					}
					{ tipo_usuario === TipoUsuario.PET_SITTER &&
						<View style={styles.row}>
							<Icon name={'attach-money'} style={styles.iconStyle} size={14}/>
							<Text style={[styles.text.cardContent, styles.xSmallMarginBottom]}>{renderPreco()}</Text>
						</View>
					}
				</View>
				<Text style={[styles.statusBadge, { backgroundColor: getStatusColor(compromisso.status, 'transparent')}]}>{getCompromissoStatus(compromisso.status)}</Text>
			</View>
			<View style={[styles.statusRightBar, { backgroundColor: getStatusColor(compromisso.status, 'solid')}]}/>
		</TouchableOpacity>
	);
};
