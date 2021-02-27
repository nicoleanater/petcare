import { ViewStyle } from 'react-native';
import { ApplicationStyles } from '../../themes';

export default {
		...ApplicationStyles,
		mainContainer: {
			paddingVertical: 25,
			paddingHorizontal: 44,
			alignItems: 'center'
		} as ViewStyle,
		mainContainerAnimais: {
			paddingHorizontal: 20,
			alignItems: 'center'
		} as ViewStyle
};