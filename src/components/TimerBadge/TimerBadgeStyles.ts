import { TextStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../themes';

export default {
	...ApplicationStyles,
	mainContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 16,
		backgroundColor: Colors.grayFive,
		paddingLeft: 15,
		paddingRight: 10,
		paddingVertical: 5,
	},
	iconStyle: {
		marginLeft: 5
	} as TextStyle,
	timeTextStyle: {
		fontFamily: Fonts.fontFamilies.latoBold,
		fontSize: Fonts.sizes.big,
		color: Colors.grayOne
	} as TextStyle
};
