import { Usuario } from "./Usuario";

export interface Avaliacao {
	id?: number;
	data?: string;
	nota?: number;
	descricao?: string;
	tipo_usuario?: string;
	usuario_avaliador?: Usuario;
}
