import { Usuario } from "../../models/Usuario";

export interface UsuarioState extends Usuario { }

export const usuarioInitialState: UsuarioState = {
	id: null,
	email: '',
	senha: '',
	nome: '',
	sobrenome: '',
	data_nasc: null,
	celular: '',
	foto: null,
	nota_media: null,
	tipo_usuario: null,
	endereco: null,
	animais: []
}

export default usuarioInitialState;