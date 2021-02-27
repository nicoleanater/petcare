import { Animal } from "../../models/Animal";
import { Usuario } from "../../models/Usuario";
import types from "./types";

const setUsuario = (usuario: Usuario) => ({ type: types.SET_USUARIO, payload: usuario });

const addAnimal = (animal: Animal) => ({ type: types.ADD_ANIMAL, payload: animal });

const removeAnimal = (index: number) => ({ type: types.REMOVE_ANIMAL, payload: index });

const editAnimal = (newAnimal: Animal, index: number) => ({ type: types.EDIT_ANIMAL, payload: { newAnimal, index } });

export default {
	setUsuario,
	addAnimal,
	removeAnimal,
	editAnimal
}