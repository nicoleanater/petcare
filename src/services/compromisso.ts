import { AxiosResponse } from 'axios';
import api from '.';
import { Compromisso } from '../models/Compromisso';

export function buscaCompromissosAtivos(idUsuario: number): Promise<AxiosResponse<Array<Compromisso>>> {
	return api.get(`/compromissos/${idUsuario}/ativos`);
}

export function buscaCompromissosHistorico(idUsuario: number): Promise<AxiosResponse<Array<Compromisso>>> {
	return api.get(`/compromissos/${idUsuario}/historico`);
}
