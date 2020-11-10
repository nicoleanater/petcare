import { AxiosResponse } from 'axios';
import api from '.';
import { Usuario } from '../models/Usuario'

export function login(usuario: Usuario): Promise<AxiosResponse<Usuario>> {
	return api.post<Usuario>(`/usuario/login`, usuario);
}
