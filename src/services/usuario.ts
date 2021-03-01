import { AxiosResponse } from 'axios';
import api from '.';
import { Usuario } from '../models/Usuario'

export function login(usuario: Usuario): Promise<AxiosResponse<Usuario>> {
	return api.post<Usuario>(`/usuario/login`, usuario);
}

export function salvarUsuario(usuario: Usuario): Promise<AxiosResponse> {
	return api.post<Usuario>(`/usuario`, usuario);
}

export function buscarPetsitters(idCidade: number): Promise<AxiosResponse<Array<Usuario>>> {
	return api.get<Array<Usuario>>(`/petsitter/cidade/${idCidade}`);
}
