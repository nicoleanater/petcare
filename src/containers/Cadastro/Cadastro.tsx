import React, { useEffect, FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import styles from './CadastroStyles';
interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
}

export const Cadastro: FunctionComponent < IProps > = (props) => {
    const initialState: IState = {
    };


    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

		//@ts-ignore
		// const teste: string = props.route.params.teste;

    return (
        <View>
					<Text>Billie Eilish</Text>
					{/* <Text>Props: {teste}</Text> */}
        </View>
    );
};
