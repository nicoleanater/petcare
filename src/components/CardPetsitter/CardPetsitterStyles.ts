import { ViewStyle } from 'react-native';
import { ApplicationStyles, Colors } from '../../themes';

export default {
	...ApplicationStyles,
	cardContainer: {
		backgroundColor: Colors.white,
		height: 130,
		borderRadius: 20,
		marginBottom: 15,
		paddingHorizontal: 20,
		elevation: 2,
		flexDirection: 'row',
		alignItems: 'center'
	} as ViewStyle,
	textInfoContainer: {
		marginLeft: 20,
	} as ViewStyle
};
