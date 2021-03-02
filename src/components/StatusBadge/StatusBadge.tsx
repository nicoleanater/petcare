import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { CompromissoStatus } from '../../models/Compromisso';
import { getCompromissoStatus, getStatusColor } from '../../utils/EnumToString';
import styles from './StatusBadgeStyles';

interface IProps {
	status: CompromissoStatus;
}

export const StatusBadge: FunctionComponent<IProps> = ({ status }) => {

	return (
		<View style={styles.badgeContainer}>
			<Text style={styles.statusText}>{getCompromissoStatus(status)}</Text>
			<View style={[styles.statusRightBar, { backgroundColor: getStatusColor(status, 'solid')}]}/>
		</View>
	);
};
