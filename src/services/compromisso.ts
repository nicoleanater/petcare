import { AxiosResponse } from 'axios';
import api from '.';
import { Compromisso } from '../models/Compromisso';

export function buscaCompromissosAtivos(idUsuario: number): Promise<AxiosResponse<Array<Compromisso>>> {
	return api.get<Array<Compromisso>>(`/compromissos/${idUsuario}/ativos`);
}

export function buscaCompromissosHistorico(idUsuario: number): Promise<AxiosResponse<Array<Compromisso>>> {
	return api.get<Array<Compromisso>>(`/compromissos/${idUsuario}/historico`);
}

export function buscaDetalhesCompromisso(idCompromisso: number): Promise<AxiosResponse<Compromisso>> {
	return api.get<Compromisso>(`/compromissos/${idCompromisso}`);
}

