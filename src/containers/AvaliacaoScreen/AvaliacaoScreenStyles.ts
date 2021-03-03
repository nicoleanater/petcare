import { TextStyle, ViewStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../themes';

export default {
	...ApplicationStyles,
	mainContainer: {
		paddingHorizontal: 20,
		paddingVertical: 30
	} as ViewStyle,
	screenTitleText: {
		fontFamily: Fonts.fontFamilies.latoBold,
		fontSize: Fonts.sizes.giant,
		color: Colors.blackThree,
		marginBottom: 20
	} as TextStyle,
	ratingContainer: {
		...ApplicationStyles.paddingTop,
		...ApplicationStyles.smallPaddingBottom
	} as ViewStyle,
	descricaoCard: {
		backgroundColor: Colors.white,
		borderRadius: 20,
		padding: 25,
		marginBottom: 15,
		elevation: 2
	} as ViewStyle
};
