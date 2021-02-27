import { Colors, Fonts, ApplicationStyles } from '../../themes';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { TextStyle, ViewStyle } from 'react-native';

export default {
		...ApplicationStyles,
		mainContainer: {
			width: '100%',
			height: '100%',
			alignItems: 'center',
			paddingTop: responsiveHeight(10),
			paddingHorizontal: responsiveWidth(12)
		} as ViewStyle,
		registerContainer: {
			flexDirection: 'row',
			marginTop: 'auto',
			marginBottom: responsiveHeight(5),
		} as ViewStyle,
		createAccountText: {
			fontFamily: Fonts.fontFamilies.latoLight,
			fontSize: Fonts.sizes.big,
			color: Colors.black
		} as TextStyle,
		registerLink: {
			fontFamily: Fonts.fontFamilies.latoBold,
			fontSize: Fonts.sizes.big,
			color: Colors.watermelonDark
		} as TextStyle
};