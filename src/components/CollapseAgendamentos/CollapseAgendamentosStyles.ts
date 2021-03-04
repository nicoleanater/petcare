import { TextStyle, ViewStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../themes';

export default {
	...ApplicationStyles,
	mainContainer: {
		backgroundColor: Colors.white,
		borderRadius: 20,
		marginBottom: 15,
		paddingHorizontal: 28,
		paddingVertical: 5,
		elevation: 2,
	} as ViewStyle,
	agendamentoCollapseContainer: {

	} as ViewStyle,
	collapseHeader: {
		flexDirection: 'row',
		height: 47,
		alignItems: 'center'
	} as ViewStyle,
	collapseHeaderText: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.big,
		color: Colors.grayOne
	} as TextStyle,
	calendarIconStyle: {
		color: Colors.gradientPink,
		marginRight: 12
	} as TextStyle,
	arrowIconStyle: {
		color: Colors.gradientPink,
		marginLeft: 'auto'
	} as TextStyle
};
