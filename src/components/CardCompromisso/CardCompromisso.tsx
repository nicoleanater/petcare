import moment from 'moment';
import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animal, TipoAnimal } from '../../models/Animal';
import { Compromisso, CompromissoStatus } from '../../models/Compromisso';
import { Colors } from '../../themes';
import styles from './CardCompromissoStyles';

interface IProps {
	compromisso: Compromisso;
}

const getStatusColor = (status: CompromissoStatus, theme: 'solid' | 'transparent') => {
	switch (status) {
		case CompromissoStatus.SOLICITACAO: return theme === 'solid' ? Colors.statusPurple : Colors.statusPurpleLight;
		case CompromissoStatus.AGENDADO: return theme === 'solid' ? Colors.statusBlue : Colors.statusBlueLight;
		case CompromissoStatus.EM_ANDAMENTO: return theme === 'solid' ? Colors.statusYellow : Colors.statusYellowLight;
		case CompromissoStatus.RECUSADO: return theme === 'solid' ? Colors.statusGray : Colors.statusGrayLight;
		case CompromissoStatus.FINALIZADO: return theme === 'solid' ? Colors.statusGreen : Colors.statusGreenLight;
	}
}

export const CardCompromisso: FunctionComponent<IProps> = ({ compromisso }) => {

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

	const renderCompromissoStatus = (status: CompromissoStatus) => {
		switch (status) {
			case CompromissoStatus.SOLICITACAO: return 'Solicitação';
			case CompromissoStatus.AGENDADO: return 'Agendado';
			case CompromissoStatus.EM_ANDAMENTO: return 'Em Andamento';
			case CompromissoStatus.RECUSADO: return 'Recusado';
			case CompromissoStatus.FINALIZADO: return 'Finalizado';
		}
	}

	return (
		<TouchableOpacity style={styles.cardContainer} onPress={openCompromissoDetails}>
			<View style={styles.cardLeftContainer}>
				<View>
					<Text style={[styles.text.cardTitle, styles.smallMarginBottom]}>{compromisso.usuario.nome}</Text>
					<View style={styles.row}>
						<Icon name={'access-time'} style={styles.iconStyle} size={14}/>
						<Text style={[styles.text.cardContent, styles.xSmallMarginBottom]}>{renderDateInterval()}</Text>
					</View>
					<View style={styles.row}>
						<Icon name={'pets'} style={styles.iconStyle} size={14}/>
						<Text style={[styles.text.cardContent, styles.xSmallMarginBottom]}>{renderAnimais()}</Text>
					</View>
				</View>
				<Text style={[styles.statusBadge, { backgroundColor: getStatusColor(compromisso.status, 'transparent')}]}>{renderCompromissoStatus(compromisso.status)}</Text>
			</View>
			<View style={[styles.statusRightBar, { backgroundColor: getStatusColor(compromisso.status, 'solid')}]}/>
		</TouchableOpacity>
	);
};
