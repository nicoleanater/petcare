import { ViewStyle, TextStyle, StyleProp, ImageStyle } from 'react-native';
import { Colors, ApplicationStyles, Fonts } from '../../themes';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default {
	...ApplicationStyles,
	pickerContainer: {
		width: '100%',
		height: 52,
		backgroundColor: Colors.white,
		borderRadius: 71,
		paddingBottom: 5,
		marginBottom: 22,
		elevation: 2

	},
	pickerStyle: {
		marginLeft: 26,
		marginRight: 10,
		fontFamily: Fonts.fontFamilies.latoRegular,
		color: Colors.blackTwo,
	}
};