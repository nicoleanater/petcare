import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import styles from './CadastroDadosPessoaisStyles';
interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
}

export const CadastroDadosPessoais: FunctionComponent <IProps> = (props) => {
    const initialState: IState = {
    };


		//@ts-ignore
		// const teste: string = props.route.params.teste;

    return (
        <View>
					<Text>Billie Eilish</Text>
					{/* <Text>Props: {teste}</Text> */}
        </View>
    );
};
