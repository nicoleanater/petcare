import { TextStyle, ViewStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../themes';

export default {
	...ApplicationStyles,
	bubbleLeftStyle: {
		backgroundColor: Colors.white,
		elevation: 2,
		borderRadius: 20,
		borderBottomLeftRadius: 0,
		padding: 4
	} as ViewStyle,
	bubbleRightStyle: {
		backgroundColor: Colors.redOrange,
		elevation: 2,
		borderRadius: 20,
		borderBottomRightRadius: 0,
		padding: 4
	} as ViewStyle,
	rightTextStyle: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.regular,
		color: Colors.white
	} as TextStyle,
	leftTextStyle: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.regular,
		color: Colors.grayOne
	} as TextStyle,
	inputWrapperStyle: {
		borderRadius: 20,
		marginHorizontal: 15,
		marginBottom: 20,
		elevation: 2,
		minHeight: 45,
		paddingLeft: 12,
		paddingTop: 2
	} as ViewStyle,
	inputContainerStyle: {
		minHeight: 45,
		justifyContent: 'center'
	} as ViewStyle,
	textInputStyle: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.regular,
		color: Colors.black
	} as TextStyle,
	iconStyle: {
		marginRight: 15,
		marginBottom: 4,
		padding: 5,
		color: Colors.grayTwo
	}
};
