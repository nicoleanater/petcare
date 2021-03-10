import { AxiosResponse } from "axios";
import api from '.';
import { Mensagem } from '../models/Mensagem';

export function buscaChats(idUsuario: number): Promise<AxiosResponse<Array<Mensagem>>> {
	return api.get<Array<Mensagem>>(`/mensagem/${idUsuario}`);
}
