import moment from 'moment';
import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './CardDatesIntervalStyles';

interface IProps {
	dateStart: string;
	dateEnd: string;
}

export const CardDatesInterval: FunctionComponent<IProps> = ({ dateStart, dateEnd }) => {
	return (
		<View style={styles.cardContainer}>
			<View style={[styles.dateView, { borderRightWidth: 1 }]}>
				<View style={styles.dateViewTextContainer}>
					<Text style={[styles.text.latoTitle, styles.xSmallMarginBottom]}>Início</Text>
					<View style={styles.verticalCenterAlignedRow}>
						<Icon name={'access-time'} style={styles.iconStyle} size={20}/>
						<Text style={styles.text.cardRegularText}>{moment(dateStart, 'YYYY-MM-DD').format('DD/MM/YY')}</Text>
					</View>
				</View>
			</View>
			<View style={styles.dateView}>
				<View style={styles.dateViewTextContainer}>
					<Text style={[styles.text.latoTitle, styles.xSmallMarginBottom]}>Fim</Text>
					<View style={styles.verticalCenterAlignedRow}>
						<Icon name={'access-time'} style={styles.iconStyle} size={20}/>
						<Text style={styles.text.cardRegularText}>{moment(dateEnd, 'YYYY-MM-DD').format('DD/MM/YY')}</Text>
					</View>
				</View>
			</View>
		</View>
	);
};
