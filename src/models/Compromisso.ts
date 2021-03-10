import { Moment } from "moment";
import { Usuario } from "./Usuario";
import { Avaliacao } from "./Avaliacao";
import { Agendamento } from "./Agendamento";

export enum CompromissoStatus {
  SOLICITACAO = 'SOLICITACAO',
  AGENDADO = 'AGENDADO',
  EM_ANDAMENTO = 'EM_ANDAMENTO',
  RECUSADO = 'RECUSADO',
  FINALIZADO = 'FINALIZADO'
}

export interface Compromisso {
	id?: number;
	usuario?: Usuario;
	data_inicio: string;
	data_fim: string,
	status?: CompromissoStatus;
	petsitter?: Usuario;
	dono_de_animal?: Usuario;
	avaliacao_petsitter?: Avaliacao;
	avaliacao_dono_de_animal?: Avaliacao;
	agendamentos?: Array<Agendamento>;
};
