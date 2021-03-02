import React, { useEffect, FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { buscaDetalhesCompromisso } from '../../services/compromisso';
import styles from './DetalhesCompromissoScreenStyles';
interface IProps {
  id: number;
	route: {
		params: {
			id: number;
		}
	}
}

interface IState {
    // State type definition
}

export const DetalhesCompromissoScreen: FunctionComponent<IProps> = ({ route: { params: { id } } }) => {
    const initialState: IState = {
    };

		useEffect(() => {
			buscarCompromisso(id);
		}, []);

		const buscarCompromisso = async (idCompromisso) => {
			try {
				const res = await buscaDetalhesCompromisso(idCompromisso);
			} catch (error) {
				console.error({error});
			}
		}

    return (
        <View>
					<Text>DetalhesCompromissoScreen</Text>
        </View>
    );
};
