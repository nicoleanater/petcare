import React, { useEffect, FunctionComponent } from 'react';
import { Text, View } from 'react-native';
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

    return (
        <View>
					<Text>{{pascalCase name}}</Text>
        </View>
    );
};
