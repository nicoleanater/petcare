import { TextStyle, ViewStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../themes';

export default {
		...ApplicationStyles,
		tabIndicatorStyle: {
			backgroundColor: Colors.watermelonDark,
			height: 3
		} as ViewStyle,
		tabBarContainerStyle: {
			backgroundColor: Colors.white,
			height: 56,
			justifyContent: 'center'
		} as ViewStyle,
		tabLabelStyle: {
			fontFamily: Fonts.fontFamilies.latoBlack,
			fontSize: Fonts.sizes.big,
			color: Colors.paleOyster
		} as TextStyle,
		tabsBackground: {
			backgroundColor: Colors.gray,
			paddingHorizontal: 20,
			paddingVertical: 30
		} as ViewStyle
};
