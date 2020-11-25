import React, { useEffect, FunctionComponent } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './BackButtonStyles';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';

export const BackButton: FunctionComponent<StackHeaderLeftButtonProps> = (props) => {
    return (
			<TouchableOpacity onPress={props.onPress} style={styles.backButtonContainer}>
				<Icon name={'keyboard-arrow-left'} style={styles.backButton} size={40}/>
			</TouchableOpacity>
    );
};
