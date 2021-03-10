import { ViewStyle, TextStyle, StyleProp, ImageStyle } from 'react-native';
import { Colors, ApplicationStyles, Fonts } from '../../themes';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default {
	...ApplicationStyles,
	gradientHeader: {
		height: 120,
		flexDirection: 'row',
		alignItems: 'center'
	} as ViewStyle,
	userInfoContainer: {
		marginLeft: 23,
		flexDirection: 'row',
		justifyContent: 'space-between'
	} as ViewStyle,
	nomeTextStyle: {
		...ApplicationStyles.text.cardTitle,
		color: Colors.blackOne,
		marginBottom: 4
	} as TextStyle,
	userDetailsText: {
		...ApplicationStyles.text.cardContent,
		color: Colors.blackOne,
		marginBottom: 2
	} as TextStyle,
	priceContainer: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		flexDirection: 'row',
		alignItems: 'center'
	} as ViewStyle,
	priceValueText: {
		...ApplicationStyles.text.priceText,
		color: Colors.blackOne
	} as TextStyle,
	priceUnitText: {
		...ApplicationStyles.text.unitText,
		color: Colors.blackOne,
		marginLeft: 5
	}
};
