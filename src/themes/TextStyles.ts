import { TextStyle } from "react-native";
import { Colors, Fonts } from "../themes";

export default {
	cardTitle: {
		fontFamily: Fonts.fontFamilies.latoBlack,
		fontSize: Fonts.sizes.bigger,
		color: Colors.grayOne
	} as TextStyle,
	cardContent: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.regular,
		color: Colors.grayOne
	} as TextStyle
}