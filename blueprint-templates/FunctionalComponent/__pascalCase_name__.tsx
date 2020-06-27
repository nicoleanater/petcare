import React, { useEffect, FunctionComponent } from 'react';
import { View } from 'react-native';
import styles from './{{pascalCase name}}Styles';
interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
}

export const {{ pascalCase name }}: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
    };


    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (
        <View>

        </View>
    );
};
