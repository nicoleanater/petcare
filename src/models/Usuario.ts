import { Moment } from "moment";

export enum TipoUsuario {
  PET_SITTER = 'PET_SITTER',
  DONO_DE_ANIMAL = 'DONO_DE_ANIMAL',
}

export interface Usuario {
	id?: number;
	email?: string;
	senha?: string;
	nome?: string;
	sobrenome?: string;
	data_nasc?: Moment;
	celular?: string;
	foto?: string;
	nota_media?: number;
	tipo?: TipoUsuario;
}