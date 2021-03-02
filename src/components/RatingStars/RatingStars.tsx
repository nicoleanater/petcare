import React, { FunctionComponent, ReactNode } from 'react';
import { Text, View } from 'react-native';
import styles from './RatingStarsStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IProps {
	rating: number;
	size: 'small' | 'big';
	amount?: number;
}

export const RatingStars: FunctionComponent<IProps> = ({ rating, size, amount }) => {

	const ratingStarts = (rating: number) => {
		const iconSize = size === 'small' ? 19 : 24;
		const stars: ReactNode[] = [];
		for (let i = 0; i < 5; i++) {
			if (rating >= i + 1) {
				stars.push(<Icon name={'star'} style={styles.iconStyle} size={iconSize} key={i} />);
			} else if (rating >= i + 0.5) {
				stars.push(<Icon name={'star-half-o'} style={styles.iconStyle} size={iconSize} key={i} />);
			} else {
				stars.push(<Icon name={'star-o'} style={styles.iconStyle} size={iconSize} key={i} />);
			}
		}
		return stars;
	};

	const renderPlural = () => {
		if (amount === 1) {
			return `${amount} avaliação`;
		} else {
			return `${amount} avaliações`;
		}
	}

	return (
		<View style={styles.rightAlignedColumn}>
			<View style={[styles.row]}>
				{ratingStarts(rating)}
			</View>
			{amount != null &&
				<Text style={styles.ratingsText}>
					{renderPlural()}
				</Text>
			}
		</View>
	);
};
