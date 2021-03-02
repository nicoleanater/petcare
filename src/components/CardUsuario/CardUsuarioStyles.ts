import { ViewStyle } from 'react-native';
import { ApplicationStyles, Colors } from '../../themes';

export default {
	...ApplicationStyles,
	cardContainer: {
		backgroundColor: Colors.white,
		height: 130,
		borderRadius: 20,
		marginBottom: 15,
		paddingLeft: 20,
		paddingRight: 15,
		elevation: 2,
		flexDirection: 'row',
		alignItems: 'center',
	} as ViewStyle,
	rightContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	} as ViewStyle,
	textInfoContainer: {
		marginLeft: 20,
	} as ViewStyle,
	priceContainer: {
		position: 'absolute',
		right: 15,
		bottom: 15,
		flexDirection: 'row',
		alignItems: 'center'
	} as ViewStyle
};
