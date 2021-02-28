import { TextStyle, ViewStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../themes';

export default {
		...ApplicationStyles,
		tabIndicatorStyle: {
			backgroundColor: Colors.watermelonDark,
			height: 3
		} as ViewStyle,
		tabBarContainerStyle: {
			backgroundColor: Colors.white
		} as ViewStyle,
		tabLabelStyle: {
			fontFamily: Fonts.fontFamilies.latoBlack,
			fontSize: Fonts.sizes.regular,
			color: Colors.paleOyster
		} as TextStyle
};