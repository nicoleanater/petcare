import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { ApplicationStyles, Colors } from '../../themes';

export default {
	...ApplicationStyles,
	gradientBorder: {
		borderRadius: 100,
		width: 140,
		height: 140,
		justifyContent: 'center',
		alignItems: 'center'
	} as ViewStyle,
	smallPicker: {
		width: 85,
		height: 85,
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
	viewPhotoSmall: {
		width: 70,
		height: 70,
		resizeMode: 'cover'
	} as ImageStyle,
	iconContainer: {
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: Colors.white,
		width: 125,
		height: 125,
	} as ImageStyle,
	iconContainerSmall: {
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: Colors.white,
		width: 78,
		height: 78,
	} as ImageStyle,
	noBorderImage: {
		width: 140,
		height: 140,
	} as ImageStyle,
	noBorderImageSmall: {
		width: 85,
		height: 85,
	} as ImageStyle,
	viewIcon: {
		width: 95,
		height: 95,
	} as ImageStyle,
	viewIconSmall: {
		width: 50,
		height: 50,
	} as ImageStyle,
	photoIcon: {
		color: Colors.grayOne,
	} as TextStyle
};
