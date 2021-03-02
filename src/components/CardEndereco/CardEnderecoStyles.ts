import { ViewStyle } from 'react-native';
import { ApplicationStyles, Colors } from '../../themes';

export default {
	...ApplicationStyles,
	cardContainer: {
		backgroundColor: Colors.white,
		borderRadius: 20,
		marginBottom: 15,
		padding: 25,
		elevation: 2,
	} as ViewStyle,
};
