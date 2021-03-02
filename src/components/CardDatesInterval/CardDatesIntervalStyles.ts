import { TextStyle, ViewStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../themes';

export default {
	...ApplicationStyles,
	cardContainer: {
		backgroundColor: Colors.white,
		height: 85,
		borderRadius: 20,
		paddingVertical: 15,
		paddingHorizontal: 20,
		marginBottom: 15,
		elevation: 2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	} as ViewStyle,
	dateView: {
		flex: 1,
		height: '100%',
		borderColor: Colors.grayOne,
	} as ViewStyle,
	dateViewTextContainer: {
		alignSelf: 'center'
	} as TextStyle,
	iconStyle: {
		color: Colors.blueOne,
		marginRight: 15
	} as TextStyle
};
