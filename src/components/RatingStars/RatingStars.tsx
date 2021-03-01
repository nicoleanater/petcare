import React, { FunctionComponent, ReactNode } from 'react';
import { View } from 'react-native';
import styles from './RatingStarsStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IProps {
	rating: number;
	size: 'small' | 'big';
}

export const RatingStars: FunctionComponent<IProps> = ({ rating, size }) => {

	const ratingStarts = (rating: number) => {
		const iconSize = size === 'small' ? 19 : 24;
		const stars: ReactNode[] = [];
		for (let i = 0; i < 5; i++) {
			if (rating >= i + 1) {
				stars.push(<Icon name={'star'} style={styles.iconStyle} size={iconSize} key={i}/>);
			} else if (rating >= i + 0.5) {
				stars.push(<Icon name={'star-half-o'} style={styles.iconStyle} size={iconSize} key={i}/>);
			} else {
				stars.push(<Icon name={'star-o'} style={styles.iconStyle} size={iconSize} key={i}/>);
			}
		}
		return stars;
	};

	return (
		<View style={styles.row}>
			{ratingStarts(rating)}
		</View>
	);
};
