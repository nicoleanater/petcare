import types from "./types";

const setUsuario = usuario => ({ type: types.SET_USUARIO, payload: usuario });

export default {
	setUsuario,
}