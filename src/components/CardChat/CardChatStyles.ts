import { TextStyle, ViewStyle } from 'react-native';
import { ApplicationStyles, Colors } from '../../themes';

export default {
	...ApplicationStyles,
	cardContainer: {
		height: 103,
		marginBottom: 25,
		flexDirection: 'row',
		alignItems: 'flex-start',
	} as ViewStyle,
	textContainer: {
		marginLeft: 16,
		marginTop: 10,
		height: 90,
		borderBottomWidth: 1,
		borderBottomColor: Colors.grayThree,
		flex: 1,
	} as ViewStyle,
	messageTextStyle: {
		...ApplicationStyles.text.cardContentSmall,
	} as TextStyle,
	horaTextStyle: {
		...ApplicationStyles.text.cardContentSmall,
		position: 'absolute',
		right: 0,
		top: 15
	} as TextStyle
};
