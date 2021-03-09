import { TextStyle, ViewStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../themes';

export default {
	...ApplicationStyles,
	cardContainer: {
		backgroundColor: Colors.white,
		borderRadius: 20,
		marginBottom: 15,
		paddingHorizontal: 18,
		paddingVertical: 22,
		elevation: 2,
	} as ViewStyle,
	avaliacaoHeader: {
		flexDirection: 'row'
	} as ViewStyle,
	headerTextView: {
		flexDirection: 'row',
		flex: 1,
		marginBottom: 12
	} as ViewStyle,
	headerLeft: {
		marginLeft: 14,
		maxWidth: 130,
		alignItems: 'flex-start'
	} as ViewStyle,
	usuarioNomeText: {
		fontFamily: Fonts.fontFamilies.latoBlack,
		fontSize: Fonts.sizes.bigger,
		color: Colors.grayOne,
		marginBottom: 6
	} as TextStyle,
	dateText: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.small,
		color: Colors.grayOne,
		marginLeft: 'auto'
	} as TextStyle,
	descricaoText: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.regular,
		color: Colors.blackThree,
		marginTop: 12,
		marginLeft: 17
	} as TextStyle
};
