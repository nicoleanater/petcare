import { AxiosResponse } from 'axios';
import api from '.';
import { Estado } from '../models/Estado';

export function buscaEstados(): Promise<AxiosResponse<Array<Estado>>> {
	return api.get(`/estado`);
}
