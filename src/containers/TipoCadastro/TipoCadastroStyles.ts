import { ViewStyle, TextStyle } from 'react-native';
import { Colors, ApplicationStyles, Fonts } from '../../themes';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default {
	...ApplicationStyles,
	mainContainer: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: Colors.white
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
		padding: responsiveWidth(3)
	} as ViewStyle,
	optionTile: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: responsiveWidth(5)
	} as ViewStyle,
	tileText: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.bigger,
	} as TextStyle,
	textDescription: { 
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.giant,
		color: Colors.white
	} as TextStyle,
	textBold: {
		fontWeight: 'bold'
	} as TextStyle,
	arrowRightStyle: {
		color: Colors.watermelonDark,
		marginLeft: 'auto'
	} as TextStyle,
	tileDivider: {
		borderBottomWidth: 1,
		borderColor: Colors.gray,
	} as ViewStyle
};