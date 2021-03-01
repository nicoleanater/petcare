import moment from 'moment';
import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animal, TipoAnimal } from '../../models/Animal';
import { Compromisso } from '../../models/Compromisso';
import { TipoUsuario } from '../../models/Usuario';
import styles from './CardCompromissoStyles';
import { MaskService } from 'react-native-masked-text';
import { getStatusColor, getCompromissoStatus } from '../../utils/EnumToString';

interface IProps {
	compromisso: Compromisso;
}

export const CardCompromisso: FunctionComponent<IProps> = ({ compromisso }) => {
	const { tipo_usuario } = compromisso.usuario;

	const openCompromissoDetails = () => {
		// to do
	}

	const renderDateInterval = () => `${moment(compromisso.data_inicio, 'YYYY-MM-DD').format('DD/MM/YY')} - ${moment(compromisso.data_fim, 'YYYY-MM-DD').format('DD/MM/YY')}`;

	const renderAnimais = () => {
		const gatos: Array<Animal> = compromisso.usuario.animais.filter((animal: Animal) => animal.tipo_animal === TipoAnimal.GATO);
		const cachorros: Array<Animal> = compromisso.usuario.animais.filter((animal: Animal) => animal.tipo_animal === TipoAnimal.CACHORRO);

		if (gatos.length > 0 && cachorros.length > 0) {
			return `${gatos.length} ${renderPlural(gatos.length, 'gato')} e ${cachorros.length} ${renderPlural(cachorros.length, 'cachorro')}`
		}
		if (gatos.length > 0) {
			return `${gatos.length} ${renderPlural(gatos.length, 'gato')}`
		}
		if (cachorros.length > 0) {
			return `${cachorros.length} ${renderPlural(cachorros.length, 'cachorro')}`
		}
	}

	const renderPlural = (length: number, word: string) => {
		if (length > 1) return `${word}s`
		if (length === 1) return `${word}`
	}

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
							<Text style={[styles.text.cardContent, styles.xSmallMarginBottom]}>{renderAnimais()}</Text>
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
