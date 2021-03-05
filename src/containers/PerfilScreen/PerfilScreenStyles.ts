import { TextStyle, ViewStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../themes';

export default {
	...ApplicationStyles,
	perfilGradientHeader: {
		paddingTop: 56 + 30,
		flex: 1
	} as ViewStyle,
	userInfoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 40,

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

	//tabbar styles
	tabIndicatorStyle: {
		backgroundColor: Colors.watermelonDark,
		height: 3
	} as ViewStyle,
	tabBarContainerStyle: {
		backgroundColor: Colors.transparent,
		elevation: 0
	} as ViewStyle,
	tabLabelStyle: {
		fontFamily: Fonts.fontFamilies.latoBlack,
		fontSize: Fonts.sizes.big,
		color: Colors.blackOne
	} as TextStyle,
	tabsBackground: {
		backgroundColor: Colors.gray,
		paddingHorizontal: 20,
		paddingVertical: 30
	} as ViewStyle
};
