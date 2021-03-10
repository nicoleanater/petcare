import { AxiosResponse } from "axios";
import api from '.';
import { DetalhesChat } from '../models/DetalhesChat';
import { Mensagem } from '../models/Mensagem';

export function buscaChats(idUsuario: number): Promise<AxiosResponse<Array<Mensagem>>> {
	return api.get<Array<Mensagem>>(`/mensagem/${idUsuario}`);
}

export function buscaDetalhesChat(currentUserId: number, otherUserId: number): Promise<AxiosResponse<DetalhesChat>> {
	return api.get<DetalhesChat>(`/mensagem/chat`, { params: { currentUserId, otherUserId }});
}
