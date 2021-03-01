import { Colors } from "react-native/Libraries/NewAppScreen";
import { CompromissoStatus } from "../models/Compromisso";
import { TipoUsuario } from "../models/Usuario";

export const getCompromissoStatus = (status: CompromissoStatus) => {
	switch (status) {
		case CompromissoStatus.SOLICITACAO: return 'Solicitação';
		case CompromissoStatus.AGENDADO: return 'Agendado';
		case CompromissoStatus.EM_ANDAMENTO: return 'Em Andamento';
		case CompromissoStatus.RECUSADO: return 'Recusado';
		case CompromissoStatus.FINALIZADO: return 'Finalizado';
	}
}

export const getStatusColor = (status: CompromissoStatus, theme: 'solid' | 'transparent') => {
	switch (status) {
		case CompromissoStatus.SOLICITACAO: return theme === 'solid' ? Colors.statusPurple : Colors.statusPurpleLight;
		case CompromissoStatus.AGENDADO: return theme === 'solid' ? Colors.statusBlue : Colors.statusBlueLight;
		case CompromissoStatus.EM_ANDAMENTO: return theme === 'solid' ? Colors.statusYellow : Colors.statusYellowLight;
		case CompromissoStatus.RECUSADO: return theme === 'solid' ? Colors.statusGray : Colors.statusGrayLight;
		case CompromissoStatus.FINALIZADO: return theme === 'solid' ? Colors.statusGreen : Colors.statusGreenLight;
	}
}

export const getTipoUsuario = (tipo: TipoUsuario) => {
	switch (tipo) {
		case TipoUsuario.PET_SITTER: return 'Pet Sitter';
		case TipoUsuario.DONO_DE_ANIMAL: return 'Solicitação';
	}
}
