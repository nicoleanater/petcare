import { Mensagem } from "./Mensagem";
import { Usuario } from "./Usuario";

export interface DetalhesChat {
	usuario: Usuario;
	mensagens: Array<Mensagem>;
}
