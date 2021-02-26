import React, { FunctionComponent, useEffect } from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../themes';
import styles from './ImageGradientPickerStyles';

interface IProps {
	isPicker?: boolean;
	image: string | ImageSourcePropType;
	pickerCallback?: (response) => void;
	small?: boolean;
}

export const ImageGradientPicker: FunctionComponent<IProps> = ({isPicker, image, pickerCallback, small}) => {

		const openGalery = () => {
			ImagePicker.launchImageLibrary({
				mediaType: 'photo',
				maxHeight: 200,
				maxWidth: 200
			}, 
			(response) => pickerCallback(response.data))
		}


    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
		}, [])
		
		const renderImagePicker = () => (
			<TouchableWithoutFeedback onPress={openGalery} style={styles.addPhoto}>
				<Icon name={'add-a-photo'} style={styles.photoIcon} size={42}/>
			</TouchableWithoutFeedback>
		);

		const renderImageViewer = () => {
			console.log({image, test: typeof image});
			if (typeof image == 'number') {
				return (
					<View style={small ? styles.iconContainerSmall : styles.iconContainer}>
						<Image style={[small ? styles.viewIconSmall : styles.viewIcon]} source={image as ImageSourcePropType} /> 
					</View>
				);
			} else if (typeof image == 'string') {
				return (
					<Image style={[small ? styles.viewPhotoSmall : styles.viewPhoto]} source={{uri: `data:image/jpeg;base64,${image}`}} /> 
				);
			}
		}

    return (
			<LinearGradient
			colors={[Colors.gradientPink, Colors.gradientPeach]}
			start={{x: 0.4, y: 0}} end={{x: 0.8, y: 1.5}}
			style={[styles.gradientBorder, small && styles.smallPicker]}
			>
				{!isPicker || image != null
					? renderImageViewer()
					: renderImagePicker()
				}
		</LinearGradient>
    );
};
