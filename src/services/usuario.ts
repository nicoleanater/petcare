import { AxiosResponse } from 'axios';
import api from '.';
import { Usuario } from '../models/Usuario'

export function login(usuario: Usuario): Promise<AxiosResponse<Usuario>> {
	console.log({usuario});
	return api.post<Usuario>(`/usuario/login`, usuario);
}
