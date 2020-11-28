import { ViewStyle, TextStyle } from "react-native";
import { Colors, ApplicationStyles, Fonts } from "../../themes";

export default {
	...ApplicationStyles,
	headerContainer: {
		height: 56,
		backgroundColor: Colors.white,
		width: "100%",
		elevation: 4,
		justifyContent: "center",
	} as ViewStyle,
	upperHeaderContainer: {
		flexDirection: "row",
	} as ViewStyle,
	headerTextStyle: {
		fontFamily: Fonts.fontFamilies.latoBold,
		fontSize: Fonts.sizes.bigger,
		color: Colors.watermelonDark,
	} as TextStyle,
};
