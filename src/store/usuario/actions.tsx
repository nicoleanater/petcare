import { Usuario } from "../../models/Usuario";
import types from "./types";

const setUsuario = (usuario: Usuario) => ({ type: types.SET_USUARIO, payload: usuario });

export default {
	setUsuario,
}