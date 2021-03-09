import { TextStyle, ViewStyle } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ApplicationStyles, Fonts } from '../../themes';

export default {
	...ApplicationStyles,
	cardContainer: {
		backgroundColor: Colors.white,
		borderRadius: 20,
		marginBottom: 15,
		paddingLeft: 18,
		paddingRight: 27,
		paddingVertical: 22,
		elevation: 2,
	} as ViewStyle,
	animalHeader: {
		flexDirection: 'row'
	} as ViewStyle,
	headerTextView: {
		flexDirection: 'row',
		flex: 1,
		marginVertical: 12,
	} as ViewStyle,
	headerLeft: {
		marginLeft: 14,
		maxWidth: 130,
		alignItems: 'flex-start'
	} as ViewStyle,
	headerRight: {
		marginLeft: 'auto'
	} as ViewStyle,
	animalNomeText: {
		fontFamily: Fonts.fontFamilies.latoBlack,
		fontSize: Fonts.sizes.bigger,
		color: Colors.grayOne,
		marginBottom: 6
	} as TextStyle,
	animalTipoSexoText: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.regular,
		color: Colors.grayOne,
	} as TextStyle,
	idadeRacaText: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.regular,
		color: Colors.grayOne,
		marginBottom: 7
	} as TextStyle,
	descricaoText: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.regular,
		color: Colors.blackThree,
		marginTop: 12,
		marginLeft: 17
	} as TextStyle
};
