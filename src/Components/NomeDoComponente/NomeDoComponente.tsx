import React, { useEffect, FunctionComponent } from 'react';
import { View } from 'react-native';
import styles from './NomeDoComponenteStyles';
interface IProps {
    // Props type definition
}

interface IState {
		nome: string;
		idade: number;
}

export const NomeDoComponente: FunctionComponent < IProps > = (props) => {
    const initialState: IState = {
			nome: 'Jussara',
			idade: 12,
    };

    const {name, surname, age} = this.state
		const [nome, setNome] = useState(initialState.nome)

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (
        <View style={[styles.centeredColumn, styles.fullContainer]} >

        </View>
    );
};
