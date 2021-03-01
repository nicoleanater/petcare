import { TextStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../themes';

export default {
	...ApplicationStyles,
	iconStyle: {
		color: Colors.errorRed
	} as TextStyle,
	ratingsText: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.xSmall,
		marginTop: 5
	} as TextStyle
};
