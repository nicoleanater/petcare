import { TextStyle, ViewStyle } from 'react-native';
import { ApplicationStyles } from '../../themes';

export default {
	...ApplicationStyles,
	mainContainer: {
		paddingTop: 15,
		paddingHorizontal: 20
	} as ViewStyle,
	twoButtonsContainer: {
		flexDirection: 'row',
	} as ViewStyle,
	buttonStyle: {
		marginHorizontal: 10,
		marginBottom: 10,
		alignSelf: 'center'
	} as ViewStyle

};
