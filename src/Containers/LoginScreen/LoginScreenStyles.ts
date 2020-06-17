import { Colors, Fonts, ApplicationStyles } from '../../Themes';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { ViewStyle } from 'react-native';

export default {
		...ApplicationStyles,
		mainContainer: {
			width: '100%',
			height: '100%',
			flexDirection: 'column',
			alignItems: 'center',
			paddingTop: responsiveHeight(10)
		} as ViewStyle
};