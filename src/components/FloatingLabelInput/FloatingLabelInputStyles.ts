import { ViewStyle, TextStyle, StyleProp, ImageStyle } from 'react-native';
import { Colors, ApplicationStyles, Fonts } from '../../themes';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default {
	...ApplicationStyles,
	inputContainer: {
		position: 'relative',
		alignItems: 'center',
		flex: 1
	} as ViewStyle,
	// input general styles
	floatingLabelStyle: {
		justifyContent: 'flex-end',
		height: 52,
		backgroundColor: Colors.white,
		borderRadius: 71,
		paddingBottom: 5,
		marginBottom: 22,
		elevation: 2
	} as ViewStyle,
	floatingLabelErrorStyle: {
		borderColor: Colors.errorRed,
		borderWidth: 1
	} as ViewStyle,
	inputStyle: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		color: Colors.blackTwo,
		fontSize: Fonts.sizes.regular,
		textAlignVertical: 'center',
		backgroundColor: 'transparent',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		margin: 0,
		paddingVertical: 0,
		paddingHorizontal: 26,
	} as ViewStyle,
	inputWithIcon: {
		paddingHorizontal: 55,
	} as ViewStyle,
	inputContent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 24,
		paddingRight: 5
	} as ViewStyle,
	iconStyle: {
		position: 'absolute',
		top: 16,
		left: 20,
		color: Colors.grayFour,
		fontSize: Fonts.sizes.icon
	} as ViewStyle,

	// label general styles
	labelStyle: {
		fontFamily: Fonts.fontFamilies.latoLight,
		fontSize: Fonts.sizes.big,
		position: 'absolute',
		left: 26,
	} as TextStyle,
	labelStyleBlur: {
		fontSize: Fonts.sizes.big,
		bottom: 16,
	},
	labelStyleFocused: {
		fontSize: Fonts.sizes.small,
		bottom: 30
	},
	labelWithIcon: {
		left: 55
	},
	errorText: {
		position: 'absolute',
		bottom: 9,
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.xSmall,
		color: Colors.errorRed
	} as TextStyle
};