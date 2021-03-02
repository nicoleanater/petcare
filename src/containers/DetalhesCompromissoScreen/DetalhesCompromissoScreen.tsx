import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { useEffect, FunctionComponent, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { AuthHeader } from '../../components/AuthHeader/AuthHeader';
import { CardDatesInterval } from '../../components/CardDatesInterval/CardDatesInterval';
import { CardEndereco } from '../../components/CardEndereco/CardEndereco';
import { CardUsuario } from '../../components/CardUsuario/CardUsuario';
import { StatusBadge } from '../../components/StatusBadge/StatusBadge';
import { Compromisso, CompromissoStatus } from '../../models/Compromisso';
import { TipoUsuario } from '../../models/Usuario';
import { buscaDetalhesCompromisso } from '../../services/compromisso';
import { useStore } from '../../store';
import { getTipoUsuario } from '../../utils/StringUtils';
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
		const [{ usuario: { tipo_usuario } }] = useStore();
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

		const renderDateInfo = () => {
			switch (compromisso.status) {
				case CompromissoStatus.EM_ANDAMENTO:
				case CompromissoStatus.FINALIZADO:
					return (<>
						<Text>agendamentos</Text>
					</>);
				default:
					return (<>
						<Text style={styles.cardTitleStyles}>Data</Text>
						<CardDatesInterval dateStart={compromisso.data_inicio} dateEnd={compromisso.data_fim}/>
					</>);
			}
		}

    return (
        <View style={styles.mainContainer}>
					<StatusBadge status={compromisso.status}/>
					<Text style={styles.cardTitleStyles}>
						{tipo_usuario === TipoUsuario.PET_SITTER ? getTipoUsuario(TipoUsuario.DONO_DE_ANIMAL) : getTipoUsuario(TipoUsuario.PET_SITTER) }
					</Text>
					<CardUsuario usuario={tipo_usuario === TipoUsuario.PET_SITTER ? compromisso.dono_de_animal : compromisso.petsitter}/>
					{renderDateInfo()}
					<Text style={styles.cardTitleStyles}>Endereço</Text>
					<CardEndereco endereco={compromisso.dono_de_animal.endereco}/>
        </View>
    );
};
