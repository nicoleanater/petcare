import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { ApplicationStyles, Colors } from '../../themes';

export default {
		...ApplicationStyles,
		mainContainer: {
			paddingVertical: 25,
			alignItems: 'center'
		} as ViewStyle,
		gradientBorder: {
			borderRadius: 100,
			width: 140,
			height: 140,
			justifyContent: 'center',
			alignItems: 'center'
		} as ViewStyle,
		addPhoto: {
			borderRadius: 100,
			width: 125,
			height: 125,
			backgroundColor: 'white',
			justifyContent: 'center',
			alignItems: 'center'
		} as ViewStyle,
		viewPhoto: {
			borderRadius: 100,
			width: 125,
			height: 125,
			resizeMode: 'cover'
		} as ImageStyle,
		photoIcon: {
			color: Colors.grayOne,
		} as TextStyle
};