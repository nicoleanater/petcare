import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { useEffect, FunctionComponent, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { AuthHeader } from '../../components/AuthHeader/AuthHeader';
import { StatusBadge } from '../../components/StatusBadge/StatusBadge';
import { Compromisso } from '../../models/Compromisso';
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
  compromisso: Compromisso;
}

export const DetalhesCompromissoScreen: FunctionComponent<IProps> = (props) => {
    const navigation = useNavigation();
		// const id = props.route.params?.id;
		const id = 13;

		const initialState: IState = {
			compromisso: null
    };

		const [compromisso, setCompromisso] = useState(initialState.compromisso);

		useLayoutEffect(() => {
			navigation.setOptions({
				header: (props: StackHeaderProps) => <AuthHeader {...props} title={"Compromissos"} theme={'light'} />,
			});
		}, [navigation]);

		useEffect(() => {
			buscarCompromisso(id);
		}, []);

		const buscarCompromisso = async (idCompromisso) => {
			try {
				const res = await buscaDetalhesCompromisso(idCompromisso);
				setCompromisso(res.data);
			} catch (error) {
				console.error({error});
			}
		}

		if (compromisso == null ) {
			return (
				<View style={[styles.verticalCenterAlignedColumn, styles.marginTop]}>
					<ActivityIndicator size='large'/>
				</View>
			);
		}

    return (
        <View>
					<StatusBadge status={compromisso.status}/>
        </View>
    );
};
