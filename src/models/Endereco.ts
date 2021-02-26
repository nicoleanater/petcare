import { Cidade } from "./Cidade";

export interface Endereco {
	cep?: number;
	rua?: string;
	numero?: string;
	bairro?: string;
	complemento?: string;
	cidade?: Cidade;
}