import { UsuarioState, usuarioInitialState } from "./state";
import types from "./types";

const usuarioReducers = (state: UsuarioState, action) => {
	switch (action.type) {
		case types.SET_USUARIO:
			return { ...state, ...action.payload };
		case types.ADD_ANIMAL:
			return { ...state, animais: [ ...state.animais, action.payload] };
		case types.REMOVE_ANIMAL:
			return { ...state, animais: [
				...state.animais.slice(0, action.payload),
				...state.animais.slice(action.payload + 1)
			] };
		case types.EDIT_ANIMAL:
			const animais = Object.assign([], state.animais, {[action.payload.index]: action.payload.newAnimal})
			return { ...state, animais };
		case types.RESET_TO_INITIAL_STATE:
			return usuarioInitialState;
		default:
			return state;
	}
};
export default usuarioReducers;