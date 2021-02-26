import { ViewStyle, TextStyle, StyleProp, ImageStyle } from 'react-native';
import { Colors, ApplicationStyles, Fonts } from '../../themes';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default {
	...ApplicationStyles,
	mainContainer: {
		width: '100%',
	},
	pickerContainer: {
		position: 'relative',
		width: '100%',
		height: 52,
		backgroundColor: Colors.white,
		borderRadius: 71,
		paddingBottom: 5,
		marginBottom: 22,
		elevation: 2
	} as ViewStyle,
	pickerContainerError: {
		borderColor: Colors.errorRed,
		borderWidth: 1
	} as ViewStyle,
	pickerStyle: {
		marginLeft: 26,
		marginRight: 10,
		fontFamily: Fonts.fontFamilies.latoRegular,
		color: Colors.blackTwo,
	} as TextStyle,
	errorText: {
		position: 'absolute',
		bottom: 9,
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.xSmall,
		color: Colors.errorRed,
		alignSelf: 'center'
	} as TextStyle
};