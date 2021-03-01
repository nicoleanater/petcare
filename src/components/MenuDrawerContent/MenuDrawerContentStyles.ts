import { TextStyle, ViewStyle } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { ApplicationStyles, Colors, Fonts } from "../../themes";

export default {
	...ApplicationStyles,
	mainContainer: {
		height: '100%',
	} as ViewStyle,
	gradientBackground: {
		flex: 1,
		alignItems: 'center',
	} as ViewStyle,
	closeIconStyle: {
		color: Colors.blackOne,
		paddingHorizontal: 22,
		paddingVertical: 22,
	} as TextStyle,
	userInfoContainer: {
		alignSelf: 'center',
		alignItems: 'center',
		marginBottom: responsiveHeight(5)
	} as ViewStyle,
	nameTextStyle: {
		fontFamily: Fonts.fontFamilies.latoBlack,
		fontSize: Fonts.sizes.big
	} as TextStyle,
	userTypeTextStyle: {
		marginTop: 2,
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.small
	} as TextStyle,
	menuItemContainer: {
		height: 56,
		width: 130,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomColor: Colors.blackOne,
		borderBottomWidth: 1,
	} as ViewStyle,
	lastMenuItem: {
		borderBottomWidth: 0,
	} as ViewStyle,
	menuLabelStyle: {
		fontFamily: Fonts.fontFamilies.latoLight,
		fontSize: Fonts.sizes.regular,
	} as TextStyle,
	logoutButton: {
		flexDirection: 'row',
		height: 56,
		width: 130,
		marginBottom: 25,
		alignItems: 'center',
		justifyContent: 'center',
	} as ViewStyle,
	logoutIconStyle: {
		color: Colors.blackOne,
		marginRight: 8,
	} as TextStyle
}
