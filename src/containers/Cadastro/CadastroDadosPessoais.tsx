import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { HeaderCadastro } from '../../components/HeaderCadastro/HeaderCadastro';
import { TipoUsuario } from '../../models/Usuario';
import { useStore } from '../../store';
import styles from './CadastroDadosPessoaisStyles';
interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
}
export const CadastroDadosPessoais: FunctionComponent <IProps> = (props) => {
		const navigation = useNavigation();
		const [state] = useStore();
		const initialState: IState = {
		};
		
		useLayoutEffect(() => {
			console.log({state});
			
			navigation.setOptions({
				header: (props) => <HeaderCadastro {...props} userType={state.usuario.tipo} screenStep={'Dados Pessoais'}/>,
			});
		}, [navigation]);


    return (
        <View>
					<Text>Cadastro</Text>
        </View>
    );
};
