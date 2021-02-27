import { ViewStyle, TextStyle, StyleProp, ImageStyle } from 'react-native';
import { Colors, ApplicationStyles, Fonts } from '../../themes';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default {
	...ApplicationStyles,
	cardContainer: {
		...ApplicationStyles.mediumPadding,
		...ApplicationStyles.smallMarginBottom,
		borderRadius: 20,
		width: '100%',
		backgroundColor: Colors.white,
		flexDirection: 'row',
		alignItems: 'center'
	} as ViewStyle,
	textContainer: {
		marginLeft: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		flex: 1
	} as ViewStyle,
	iconStyle: {
		color: Colors.watermelonDark,
		padding: 12,
	} as ViewStyle,
};