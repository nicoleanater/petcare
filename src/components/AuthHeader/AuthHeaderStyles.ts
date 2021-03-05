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
		height: 45,
		width: 45
	} as ViewStyle
};
