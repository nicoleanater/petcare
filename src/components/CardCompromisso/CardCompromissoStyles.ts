import { ViewStyle, TextStyle, StyleProp, ImageStyle } from 'react-native';
import { Colors, ApplicationStyles, Fonts } from '../../themes';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default {
	...ApplicationStyles,
	cardContainer: {
		backgroundColor: Colors.white,
		height: 115,
		borderRadius: 20,
		marginBottom: 15,
		elevation: 2,
		flexDirection: 'row',
		justifyContent: 'space-between'
	} as ViewStyle,
	statusRightBar: {
		width: 24,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
	} as ViewStyle,
	cardLeftContainer: {
		paddingHorizontal: 30,
		paddingVertical: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		flex: 1
	} as ViewStyle,
	statusBadge: {
		borderRadius: 5,
		paddingVertical: 4,
		paddingHorizontal: 11,
		backgroundColor: Colors.statusPurpleLight,
		fontFamily: Fonts.fontFamilies.latoLight,
		fontSize: Fonts.sizes.small,
		color: Colors.blackTwo
	} as TextStyle,
	iconStyle: {
		color: Colors.grayTwo,
		marginRight: 5,
		marginTop: 2,
	} as ViewStyle,
};
