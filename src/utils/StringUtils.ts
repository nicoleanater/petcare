import { Animal, TipoAnimal, Genero } from "../models/Animal";
import { CompromissoStatus } from "../models/Compromisso";
import { TipoUsuario } from "../models/Usuario";
import { Colors } from "../themes";

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
		case CompromissoStatus.SOLICITACAO: return theme === 'solid' ? Colors.statusBlue : Colors.statusBlueLight;
		case CompromissoStatus.AGENDADO: return theme === 'solid' ? Colors.statusPurple : Colors.statusPurpleLight;
		case CompromissoStatus.EM_ANDAMENTO: return theme === 'solid' ? Colors.statusYellow : Colors.statusYellowLight;
		case CompromissoStatus.RECUSADO: return theme === 'solid' ? Colors.statusGray : Colors.statusGrayLight;
		case CompromissoStatus.FINALIZADO: return theme === 'solid' ? Colors.statusGreen : Colors.statusGreenLight;
	}
}

export const getTipoUsuario = (tipo: TipoUsuario) => {
	switch (tipo) {
		case TipoUsuario.PET_SITTER: return 'Pet Sitter';
		case TipoUsuario.DONO_DE_ANIMAL: return 'Dono de Animal';
	}
}

export const renderAnimaisText = (animais: Array<Animal>) => {
	const gatos: Array<Animal> = animais.filter((animal: Animal) => animal.tipo_animal === TipoAnimal.GATO);
	const cachorros: Array<Animal> = animais.filter((animal: Animal) => animal.tipo_animal === TipoAnimal.CACHORRO);

	if (gatos.length > 0 && cachorros.length > 0) {
		return `${gatos.length} ${renderPluralAnimais(gatos.length, 'gato')} e ${cachorros.length} ${renderPluralAnimais(cachorros.length, 'cachorro')}`
	}
	if (gatos.length > 0) {
		return `${gatos.length} ${renderPluralAnimais(gatos.length, 'gato')}`
	}
	if (cachorros.length > 0) {
		return `${cachorros.length} ${renderPluralAnimais(cachorros.length, 'cachorro')}`
	}
}

export const renderPluralAnimais = (length: number, word: string) => {
	if (length > 1) return `${word}s`
	if (length === 1) return `${word}`
}

export const getTipoAnimal = (tipo: TipoAnimal) => {
	switch (tipo) {
		case TipoAnimal.GATO: return 'Gato';
		case TipoAnimal.CACHORRO: return 'Cachorro';
	}
}

export const getGenero = (genero: Genero) => {
	switch (genero) {
		case Genero.FEMEA: return 'Fêmea';
		case Genero.MACHO: return 'Macho';
	}
}
