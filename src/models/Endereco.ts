import { Cidade } from "./Cidade";

export interface Endereco {
	cep?: string;
	rua?: string;
	numero?: number;
	bairro?: string;
	complemento?: string;
	cidade?: Cidade;
}