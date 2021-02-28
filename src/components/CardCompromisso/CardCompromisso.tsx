import moment from 'moment';
import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Animal, TipoAnimal } from '../../models/Animal';
import { Compromisso, CompromissoStatus } from '../../models/Compromisso';
import { Colors } from '../../themes';
import styles from './CardCompromissoStyles';

interface IProps {
	compromisso: Compromisso;
}

const getStatusColor = (status: CompromissoStatus) => {
	switch (status) {
		case CompromissoStatus.SOLICITACAO: return Colors.statusPurple;
		case CompromissoStatus.AGENDADO: return Colors.statusBlue;
		case CompromissoStatus.EM_ANDAMENTO: return Colors.statusYellow;
		case CompromissoStatus.RECUSADO: return Colors.statusGray;
		case CompromissoStatus.FINALIZADO: return Colors.statusGreen;
	}
}

export const CardCompromisso: FunctionComponent<IProps> = ({ compromisso }) => {

	const openCompromissoDetails = () => {
		// to do
	}

	const renderDateInterval = () => `${moment(compromisso.data_inicio).format('DD/MM/YY')} - ${moment(compromisso.data_fim).format('DD/MM/YY')}`;

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
					<Text>{compromisso.usuario.nome}</Text>
					<Text>{renderDateInterval()}</Text>
					<Text>{renderAnimais()}</Text>
				</View>
				<View style={styles.statusBadge}>
					<Text>{renderCompromissoStatus(compromisso.status)}</Text>
				</View>
			</View>
			<View style={[styles.statusRightBar, { backgroundColor: getStatusColor(compromisso.status)}]}/>
		</TouchableOpacity>
	);
};
