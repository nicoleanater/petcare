import { ViewStyle, TextStyle, StyleProp, ImageStyle } from 'react-native';
import { Colors, ApplicationStyles, Fonts } from '../../themes';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default {
	...ApplicationStyles,

	// button styles
	defaultButtonStyle: {
		backgroundColor: Colors.watermelonDark,
		height: 52,
		paddingHorizontal: 40,
		minWidth: 160,
		borderRadius: 42,
		alignItems: 'center',
		justifyContent: 'center',
		...ApplicationStyles.mediumMarginTop
	} as ViewStyle,
	secondaryButtonStyle: {
		backgroundColor: Colors.transparent,
		borderWidth: 2,
		borderColor: Colors.watermelonDark
	} as ViewStyle,
	smallButton: {
		height: 42,
		minWidth: 120,
		paddingHorizontal: 25,
	} as ViewStyle,

	// button text styles
	defaultTextStyle: {
		fontFamily: Fonts.fontFamilies.latoBlack,
		fontSize: Fonts.sizes.big,
		color: Colors.white,
		textAlign: 'center'
	} as TextStyle,
	secondaryTextStyle: {
		color: Colors.watermelonDark
	} as TextStyle,


	loadingStyle: {
		height: 25,
	} as ViewStyle,
	iconStyle: {
		color: Colors.white,
		marginTop: 3,
	} as ViewStyle,
};