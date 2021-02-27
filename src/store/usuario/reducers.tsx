import { UsuarioState } from "./state";
import types from "./types";

const usuarioReducers = (state: UsuarioState, action) => {
	console.log({action});
	switch (action.type) {
		case types.SET_USUARIO:
			return { ...state, ...action.payload };
		case types.ADD_ANIMAL:
			return { ...state, animais: [ ...state.animais, action.payload] };
		default:
			return state;
	}
};
export default usuarioReducers;