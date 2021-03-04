import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../themes';
import styles from './TimerBadgeStyles';

interface IProps {
	index: number;
	time: string;
	status: 'initial' | 'playing' | 'finished';
	onPress: (id: number) => void;
}

export const TimerBadge: FunctionComponent<IProps> = ({ index, time, status, onPress }) => {

	const getIconName = () => {
		switch (status) {
			case 'initial': return 'play-circle-filled';
			case 'playing': return 'pause-circle-filled';
			case 'finished': return 'access-time';
		}
	}

	const getIconColor = () => {
		switch (status) {
			case 'initial': return Colors.greenOne;
			case 'playing': return Colors.red;
			case 'finished': return Colors.blueOne;
		}
	}

	return (
		<TouchableScale
			tension={90}
			friction={6}
			style={[styles.mainContainer, status === 'finished' && { backgroundColor: 'transparent' }]}
			disabled={status === 'finished'}
			onPress={() => onPress(index)}
		>
			<Text style={styles.timeTextStyle}>{time}</Text>
			<Icon name={getIconName()} style={styles.iconStyle} size={24} color={getIconColor()}/>
		</TouchableScale>
	);
};
