import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { FunctionComponent, useLayoutEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { HeaderCadastro } from '../../components/HeaderCadastro/HeaderCadastro';
import { useStore } from '../../store';
import styles from './CadastroDadosPessoaisStyles';
import ImagePicker from 'react-native-image-picker';
import { Colors } from '../../themes';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IProps {
    // Props type definition
}

interface IState {
	image: String;
}

export const CadastroDadosPessoais: FunctionComponent <IProps> = (props) => {
		const navigation = useNavigation();
		const [state] = useStore();
		const initialState: IState = {
			image: null
		};
	const [image, setImage] = useState(initialState.image);

		
		useLayoutEffect(() => {
			navigation.setOptions({
				header: (props: StackHeaderProps) => <HeaderCadastro {...props} userType={state.usuario.tipo} screenStep={'Dados Pessoais'}/>,
			});
		}, [navigation]);

		const openGalery = () => {
			ImagePicker.launchImageLibrary({
				mediaType: 'photo',
				maxHeight: 200,
				maxWidth: 200
			}, 
			(response) => {setImage(response.data)})
		}


    return (
        <View style={styles.mainContainer}>
					<LinearGradient
						colors={[Colors.gradientPink, Colors.gradientPeach]}
						start={{x: 0.4, y: 0}} end={{x: 0.8, y: 1.5}}
						style={styles.gradientBorder}
						>
							{image != null
							? <Image style={styles.viewPhoto} source={{uri: `data:image/jpeg;base64,${image}`}} /> 
							
							: <TouchableWithoutFeedback onPress={openGalery} style={styles.addPhoto}>
								<Icon name={'add-a-photo'} style={styles.photoIcon} size={42}/>
							</TouchableWithoutFeedback>}
							
					</LinearGradient>
        </View>
    );
};
