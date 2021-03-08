import { TextStyle, ViewStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../themes';

export default {
	...ApplicationStyles,

	// perfil header styles
	perfilGradientHeader: {
		paddingTop: 56 + 30,
		flex: 1
	} as ViewStyle,
	userInfoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 40,

	} as ViewStyle,
	nameTextStyle: {
		fontFamily: Fonts.fontFamilies.latoBlack,
		fontSize: Fonts.sizes.bigger,
		color: Colors.blackOne,
		marginBottom: 5
	} as TextStyle,
	userTypeTextStyle: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.regular,
		color: Colors.blackOne,
		marginBottom: 5
	} as TextStyle,

	//tabbar styles
	tabIndicatorStyle: {
		backgroundColor: Colors.watermelonDark,
		height: 3
	} as ViewStyle,
	tabBarContainerStyle: {
		backgroundColor: Colors.transparent,
		elevation: 0
	} as ViewStyle,
	tabLabelStyle: {
		fontFamily: Fonts.fontFamilies.latoBlack,
		fontSize: Fonts.sizes.big,
		color: Colors.blackOne
	} as TextStyle,
	tabsBackground: {
		flex: 1,
		backgroundColor: Colors.gray,
		paddingHorizontal: 20,
		paddingVertical: 40
	} as ViewStyle,

	// tabs content styles
	cardContainer: {
		backgroundColor: Colors.white,
		borderRadius: 20,
		marginBottom: 15,
		paddingHorizontal: 20,
		paddingVertical: 30,
		elevation: 2,
	} as ViewStyle,
	cardLine: {
		flexDirection: 'row',
		flex: 1,
		marginBottom: 35
	} as ViewStyle,
	cardCell: {
		width: '50%'
	} as ViewStyle,
	cardLabel: {
		fontFamily: Fonts.fontFamilies.latoBold,
		fontSize: Fonts.sizes.regular,
		color: Colors.blackThree
	} as TextStyle,
	cardValue: {
		fontFamily: Fonts.fontFamilies.latoRegular,
		fontSize: Fonts.sizes.regular,
		color: Colors.grayOne,
		marginTop: 3
	} as TextStyle,
	divider: {
		width: '100%',
		height: 1,
		backgroundColor: Colors.blackOne,
		marginBottom: 35
	} as ViewStyle,
	priceView: {
		position: 'absolute',
		right: 27,
		bottom: 30,
		alignItems: 'flex-end'
	} as ViewStyle,
	perHourText: {
		fontFamily: Fonts.fontFamilies.latoLight,
		fontSize: Fonts.sizes.small,
		color: Colors.blackThree,
		marginTop: 3
	} as TextStyle
};
