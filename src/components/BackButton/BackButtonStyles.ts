import { ViewStyle, TextStyle, StyleProp, ImageStyle } from 'react-native';
import { Colors, ApplicationStyles, Fonts } from '../../themes';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default {
	...ApplicationStyles,
	backButtonContainer: {
		marginHorizontal: responsiveHeight(1),
	} as ViewStyle,
	backButtonLight: {
		color: Colors.white
	} as TextStyle,
	backButtonDark: {
		color: Colors.watermelonDark
	} as TextStyle
};