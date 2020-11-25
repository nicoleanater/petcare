import { UsuarioState } from "./state";
import types from "./types";

const usuarioReducers = (state: UsuarioState, action) => {
	switch (action.type) {
		case types.SET_USUARIO:
			return { ...state, ...action.payload };;
		default:
			return state;
	}
};
export default usuarioReducers;