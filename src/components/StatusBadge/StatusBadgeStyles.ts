import { TextStyle, ViewStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../themes';

export default {
	...ApplicationStyles,
	badgeContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		alignSelf: 'flex-start',
		height: 52,
		borderRadius: 71,
		backgroundColor: Colors.white,
		elevation: 2
	} as ViewStyle,
	statusText: {
		fontFamily: Fonts.fontFamilies.latoBold,
		fontSize: Fonts.sizes.bigger,
		color: Colors.grayOne,
		paddingLeft: 25,
		paddingRight: 10
	} as TextStyle,
	statusRightBar: {
		height: '100%',
		width: 37,
		borderTopRightRadius: 71,
		borderBottomRightRadius: 71,
	} as ViewStyle
};
