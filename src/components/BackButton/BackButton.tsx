import React, { FunctionComponent } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './BackButtonStyles';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';

interface IProps {
	theme: 'light' | 'dark';
}

export const BackButton: FunctionComponent<IProps & StackHeaderLeftButtonProps> = (props) => {
    return (
			<TouchableOpacity onPress={props.onPress} style={styles.backButtonContainer}>
				<Icon name={'keyboard-arrow-left'} style={props.theme === 'light' ? styles.backButtonLight : styles.backButtonDark} size={40}/>
			</TouchableOpacity>
    );
};
