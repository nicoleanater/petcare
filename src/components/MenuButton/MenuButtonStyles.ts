import { ViewStyle, TextStyle, StyleProp, ImageStyle } from "react-native";
import { Colors, ApplicationStyles, Fonts } from "../../themes";
import { responsiveHeight } from "react-native-responsive-dimensions";

export default {
	...ApplicationStyles,
	menuButtonContainer: {
		marginHorizontal: responsiveHeight(2),
	} as ViewStyle,
	menuButtonLight: {
		color: Colors.white,
	} as TextStyle,
	menuButtonDark: {
		color: Colors.watermelonDark,
	} as TextStyle,
};
