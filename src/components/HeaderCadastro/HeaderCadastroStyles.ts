import { ViewStyle, TextStyle, StyleProp, ImageStyle } from 'react-native';
import { Colors, ApplicationStyles, Fonts } from '../../themes';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default {
	...ApplicationStyles,
	headerContainer: {
		height: 118,
		backgroundColor: Colors.white,
		width: '100%',
		paddingVertical: 11,
		elevation: 4
	} as ViewStyle,
	headerTextStyle: {
		fontFamily: Fonts.fontFamilies.latoBold,
		fontSize: Fonts.sizes.bigger,
		color: Colors.watermelonDark,
		marginBottom: 3
	} as TextStyle,
	upperHeaderContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	} as ViewStyle,
	lowerHeaderContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 40,
		marginTop: 5
	} as ViewStyle,
	textTipoUsuario: {
		fontFamily: Fonts.fontFamilies.latoBlack,
		fontSize: Fonts.sizes.bigger,
		color: Colors.grayOne
	} as TextStyle,
	textScreenStep: {
		marginTop: 3,
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.regular
	} as TextStyle
};