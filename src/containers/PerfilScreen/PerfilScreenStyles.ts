import { TextStyle, ViewStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../themes';

export default {
	...ApplicationStyles,
	perfilGradientHeader: {
		paddingHorizontal: 40,
		paddingTop: 56 + 30,
	} as ViewStyle,
	userInfoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	} as ViewStyle,
	nameTextStyle: {
		fontFamily: Fonts.fontFamilies.latoBlack,
		fontSize: Fonts.sizes.bigger,
		color: Colors.blackOne,
		marginBottom: 5
	} as TextStyle,
	userTypeTextStyle: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.regular,
		color: Colors.blackOne,
		marginBottom: 5
	} as TextStyle,
};
