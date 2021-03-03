import { AxiosResponse } from 'axios';
import api from '.';
import { Avaliacao } from '../models/Avaliacao';
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

export function aceitarSolicitacaoCompromisso(idCompromisso: number): Promise<AxiosResponse<Compromisso>> {
	return api.post<Compromisso>(`/compromissos/${idCompromisso}/solicitacao`, {
		solicitacao_aceita: true
	});
}

export function recusarSolicitacaoCompromisso(idCompromisso: number): Promise<AxiosResponse<Compromisso>> {
	return api.post<Compromisso>(`/compromissos/${idCompromisso}/solicitacao`, {
		solicitacao_aceita: false
	});
}

export function iniciarCompromisso(idCompromisso: number): Promise<AxiosResponse<Compromisso>> {
	return api.post<Compromisso>(`/compromissos/${idCompromisso}/iniciar`);
}

export function finalizarCompromisso(idCompromisso: number): Promise<AxiosResponse<Compromisso>> {
	return api.post<Compromisso>(`/compromissos/${idCompromisso}/finalizar`);
}

export function criarAvaliacao(avaliacao: Avaliacao, idCompromisso: number): Promise<AxiosResponse<Compromisso>> {
	return api.post<Compromisso>(`/compromissos/${idCompromisso}/avaliacao`, avaliacao);
}
