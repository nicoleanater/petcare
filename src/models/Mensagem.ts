import { Usuario } from "./Usuario";

export interface Mensagem {
	id?: number;
	texto?: string;
	data?: string;
	usuario?: Usuario;
}
