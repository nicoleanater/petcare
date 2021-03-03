import { TextStyle } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
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
	} as TextStyle,
	priceText: {
		fontFamily: Fonts.fontFamilies.latoBlack,
		fontSize: Fonts.sizes.regular,
		color: Colors.blackThree
	} as TextStyle,
	unitText: {
		fontFamily: Fonts.fontFamilies.latoLight,
		fontSize: Fonts.sizes.small,
		color: Colors.blackThree
	} as TextStyle,
	latoTitle: {
		fontFamily: Fonts.fontFamilies.latoBold,
		fontSize: Fonts.sizes.bigger,
		color: Colors.blackThree
	},
	cardRegularText: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.bigger,
		color: Colors.grayOne,
		marginBottom: 3
	} as TextStyle,
	cardTitleText: {
		fontFamily: Fonts.fontFamilies.latoBold,
		fontSize: Fonts.sizes.bigger,
		color: Colors.blackThree,
		marginBottom: responsiveWidth(3),
		marginTop: 10
	} as TextStyle
}
