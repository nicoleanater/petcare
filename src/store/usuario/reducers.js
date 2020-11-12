import types from "./types";

const usuarioReducers = (state, action) => {
	switch (action.type) {
		case types.SET_USUARIO:
			return { ...state, usuario: action.payload };;
		default:
			return state;
	}
};
export default usuarioReducers;