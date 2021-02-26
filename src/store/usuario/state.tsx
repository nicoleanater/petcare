import { Usuario, TipoUsuario } from "../../models/Usuario";

export interface UsuarioState extends Usuario {
	// animais: Array<Animal>
}

const usuarioState: UsuarioState = {
	id: null,
	email: '',
	senha: '',
	nome: '',
	sobrenome: '',
	data_nasc: null,
	celular: '',
	foto: null,
	nota_media: null,
	tipo: TipoUsuario.DONO_DE_ANIMAL
}

export default usuarioState;