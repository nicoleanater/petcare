import { ViewStyle, TextStyle } from "react-native";
import { Colors, ApplicationStyles, Fonts } from "../../themes";
import { responsiveHeight } from "react-native-responsive-dimensions";

export default {
	...ApplicationStyles,
	tabBarContainer: {
		display: "flex",
		flexDirection: "row",
		height: 56,
		backgroundColor: Colors.white,
		elevation: 5,
	} as ViewStyle,
	menuItem: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	} as ViewStyle,
	menuItemTitle: {
		color: Colors.paleOyster,
		fontSize: Fonts.sizes.big,
		fontFamily: Fonts.fontFamilies.latoBold,
	} as TextStyle,
	menuItemSelected: {
		borderBottomWidth: 2,
        borderColor: Colors.watermelonDark,
	},
};
