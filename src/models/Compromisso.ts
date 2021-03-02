import { Moment } from "moment";
import { Usuario } from "./Usuario";

export enum CompromissoStatus {
  SOLICITACAO = 'SOLICITACAO',
  AGENDADO = 'AGENDADO',
  EM_ANDAMENTO = 'EM_ANDAMENTO',
  RECUSADO = 'RECUSADO',
  FINALIZADO = 'FINALIZADO'
}

export interface Compromisso {
	id?: number;
	usuario: Usuario;
	data_inicio: string;
	data_fim: string,
	status: CompromissoStatus
};
