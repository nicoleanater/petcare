import { Animal } from "./Animal";
import { Avaliacao } from "./Avaliacao";
import { Endereco } from "./Endereco";

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
	data_nasc?: string;
	celular?: string;
	foto?: string;
	nota_media?: number;
	tipo_usuario?: TipoUsuario;
	endereco?: Endereco;
	animais?: Array<Animal>;
	descricao?: string;
	preco?: number;
	avaliacoes: Array<Avaliacao>;
	qtde_avaliacoes?: number;
}
