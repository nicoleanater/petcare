import { ViewStyle, TextStyle, StyleProp, ImageStyle } from 'react-native';
import { Colors, ApplicationStyles, Fonts } from '../../themes';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default {
	...ApplicationStyles,
	mainContainer: {
		paddingTop: 15,
		paddingHorizontal: 20
	} as ViewStyle,
	cardTitleStyles: {
		...ApplicationStyles.text.latoTitle,
		...ApplicationStyles.smallMarginBottom,
		marginTop: 10
	} as TextStyle
};
