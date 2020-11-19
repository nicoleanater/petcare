import { Colors, Fonts, ApplicationStyles } from '../../themes';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { ViewStyle } from 'react-native';

export default {
		...ApplicationStyles,
		mainContainer: {
			width: '100%',
			height: '100%',
			flexDirection: 'column',
			alignItems: 'center',
			paddingTop: responsiveHeight(10),
			paddingHorizontal: responsiveWidth(12)
		} as ViewStyle
};