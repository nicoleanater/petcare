import React, { FunctionComponent, ReactNode } from 'react';
import { Text, View } from 'react-native';
import styles from './RatingStarsStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps {
	rating: number;
	size: 'small' | 'medium' | 'big';
	amount?: number;
	touchable?: boolean;
	onStarPressed?: (rating: number) => void;
}

export const RatingStars: FunctionComponent<IProps> = ({ rating, size, amount, touchable, onStarPressed }) => {

	const ratingStarts = (rating: number) => {
		let iconSize;
		switch (size) {
			case 'small': iconSize = 19; break;
			case 'medium': iconSize = 24; break;
			case 'big': iconSize = 38; break;
		}

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

		if (touchable) {
			return stars.map(((item, i) => (
				<TouchableOpacity style={styles.fullWidthContainer} onPress={() => onStarPressed(i+1)} key={i}>
					{item}
				</TouchableOpacity>
			)));
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
