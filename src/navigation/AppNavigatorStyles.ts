import { TextStyle, ViewStyle } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { ApplicationStyles, Colors } from "../themes";

export default {
	...ApplicationStyles,
	header: {
		height: 56
	},
	backButtonContainer: {
		marginHorizontal: responsiveHeight(1),
	} as ViewStyle,
	backButton: {
		color: Colors.white,
	} as TextStyle
}