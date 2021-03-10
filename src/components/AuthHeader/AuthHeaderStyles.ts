import { ViewStyle, TextStyle } from "react-native";
import { Colors, ApplicationStyles, Fonts } from "../../themes";

export default {
	...ApplicationStyles,
	headerContainer: {
		height: 56,
		backgroundColor: Colors.white,
		width: "100%",
		elevation: 4,
		justifyContent: "center"
	} as ViewStyle,
	headerContainerTransparent: {
		backgroundColor: Colors.transparent,
		elevation: 4
	} as ViewStyle,
	upperHeaderContainer: {
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: 'space-between'
	} as ViewStyle,
	headerTextStyle: {
		fontFamily: Fonts.fontFamilies.latoBold,
		fontSize: Fonts.sizes.bigger,
		color: Colors.watermelonDark,
	} as TextStyle,
	headerTextTransparentStyle: {
		color: Colors.white
	} as TextStyle,
	rightMenuButton: {
		height: 60,
		width: 60,
		alignItems: 'center',
		justifyContent: 'center',
	} as ViewStyle,
	menuButtonLight: {
		color: Colors.white,
	} as TextStyle,
	menuButtonDark: {
		color: Colors.watermelonDark,
	} as TextStyle,
	rightMenuContainer: {
		position: 'absolute',
		right: 30,
		top: 55,
		backgroundColor: Colors.white,
		borderRadius: 8,
		borderTopRightRadius: 0,
		paddingHorizontal: 22
	} as ViewStyle,
	menuItemContainer: {
		paddingVertical: 19,
		alignItems: 'flex-end'
	} as ViewStyle,
	menuDivider: {
		borderTopWidth: 1,
		borderTopColor: Colors.gray
	} as ViewStyle,
	menuTextStyle: {
		fontFamily: Fonts.fontFamilies.latoBold,
		fontSize: Fonts.sizes.big,
		color: Colors.blackTwo
	} as TextStyle
};
