import React, { useEffect, FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import styles from './MensagensDetailsScreenStyles';

interface IProps {
	route: {
		params: {
			currentUserId: number;
			otherUserId: number;
		}
	}
}

interface IState {
	// State type definition
}

export const MensagensDetailsScreen: FunctionComponent<IProps> = (props) => {
	const currentUserId = props.route.params?.currentUserId;
	const otherUserId = props.route.params?.otherUserId;

	console.log({currentUserId, otherUserId});

	const initialState: IState = {
	};

	return (
		<View>
			<Text>MensagensDetailsScreen</Text>
		</View>
	);
};
