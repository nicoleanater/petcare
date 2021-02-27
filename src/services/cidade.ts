import { AxiosResponse } from 'axios';
import api from '.';
import { Cidade } from '../models/Cidade';

export function buscaCidades(estadoId: number): Promise<AxiosResponse<Array<Cidade>>> {
	return api.get(`/cidade/${estadoId}`);
}
