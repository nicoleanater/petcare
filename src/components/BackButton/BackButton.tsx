import React, { FunctionComponent } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './BackButtonStyles';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';

interface IProps {
	onPress: () => void;
}

export const BackButton: FunctionComponent<IProps | StackHeaderLeftButtonProps> = (props) => {
    return (
			<TouchableOpacity onPress={props.onPress} style={styles.backButtonContainer}>
				<Icon name={'keyboard-arrow-left'} style={styles.backButton} size={40}/>
			</TouchableOpacity>
    );
};
