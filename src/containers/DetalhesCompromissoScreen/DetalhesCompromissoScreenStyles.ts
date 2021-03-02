import { TextStyle, ViewStyle } from 'react-native';
import { ApplicationStyles } from '../../themes';

export default {
	...ApplicationStyles,
	mainContainer: {
		paddingTop: 15,
		paddingHorizontal: 20
	} as ViewStyle,
	cardTitleStyles: {
		...ApplicationStyles.text.latoTitle,
		...ApplicationStyles.smallMarginBottom,
		marginTop: 10
	} as TextStyle,
	twoButtonsContainer: {
		flexDirection: 'row',
	} as ViewStyle,
	buttonStyle: {
		marginHorizontal: 10,
		marginBottom: 10,
		alignSelf: 'center'
	} as ViewStyle

};
