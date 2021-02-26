import { ViewStyle, TextStyle, StyleProp, ImageStyle } from 'react-native';
import { Colors, ApplicationStyles, Fonts } from '../../themes';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default {
	...ApplicationStyles,
	mainContainer: {
		paddingVertical: 25,
		paddingHorizontal: 44,
		alignItems: 'center'
	} as ViewStyle
};