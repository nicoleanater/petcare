import { Usuario } from "../../models/Usuario";

export interface UsuarioState {
	usuario: Usuario;
}

const usuarioState = {
	usuario: null 
}

export default usuarioState;