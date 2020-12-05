import React, { FunctionComponent, useEffect } from 'react';
import { Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../themes';
import styles from './ImageGradientPickerStyles';

interface IProps {
	isPicker?: boolean;
	image: string;
	pickerCallback: (response) => void;
}

export const ImageGradientPicker: FunctionComponent<IProps> = ({isPicker, image, pickerCallback}) => {

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

		const renderImageViewer = () => (
			<Image style={styles.viewPhoto} source={{uri: `data:image/jpeg;base64,${image}`}} /> 
		)

    return (
			<LinearGradient
			colors={[Colors.gradientPink, Colors.gradientPeach]}
			start={{x: 0.4, y: 0}} end={{x: 0.8, y: 1.5}}
			style={styles.gradientBorder}
			>
				{!isPicker || image != null
					? renderImageViewer()
					: renderImagePicker()
				}
		</LinearGradient>
    );
};
