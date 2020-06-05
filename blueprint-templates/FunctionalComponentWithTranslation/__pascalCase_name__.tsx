import React, { useEffect, FunctionComponent } from 'react';
import { View } from 'react-native';
import styles from './{{pascalCase name}}Styles';
import use{{ pascalCase name }}Translation from './{{pascalCase name}}Translation'
interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
}

export const {{ pascalCase name }}: FunctionComponent < IProps > = (props) => {

    const {I18n} = use{{ pascalCase name }}Translation()

    const initialState: IState = {
    };

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
