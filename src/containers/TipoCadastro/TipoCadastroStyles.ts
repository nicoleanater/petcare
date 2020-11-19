import { ViewStyle, TextStyle } from 'react-native';
import { Colors, ApplicationStyles, Fonts } from '../../themes';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default {
	...ApplicationStyles,
	mainContainer: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center'
	} as ViewStyle,
	upperGradientContainer: {
		flex: 1,
		width: '100%',
		paddingTop: responsiveHeight(10),
		paddingHorizontal: responsiveWidth(12)
	} as ViewStyle,
	optionsContainer: {
		flex: 1.5,
		width: '100%',
	} as ViewStyle,
	textDescription: { 
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.giant,
		color: Colors.white
	} as TextStyle,
	textBold: {
		fontWeight: 'bold'
	} as TextStyle
};