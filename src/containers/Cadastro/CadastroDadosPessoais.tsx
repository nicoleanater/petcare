import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { FunctionComponent, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderCadastro } from '../../components/HeaderCadastro/HeaderCadastro';
import { TipoUsuario } from '../../models/Usuario';
import { useStore } from '../../store';
import styles from './CadastroDadosPessoaisStyles';
import ImagePicker from 'react-native-image-picker';
interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
}
export const CadastroDadosPessoais: FunctionComponent <IProps> = (props) => {
		const navigation = useNavigation();
		const [state] = useStore();
		const initialState: IState = {
		};
		
		useLayoutEffect(() => {
			navigation.setOptions({
				header: (props: StackHeaderProps) => <HeaderCadastro {...props} userType={state.usuario.tipo} screenStep={'Dados Pessoais'}/>,
			});
		}, [navigation]);

		const openGalery = () => {
			ImagePicker.launchImageLibrary({
				mediaType: 'photo',
				// includeBase64: false,
				// maxHeight: 200,
				// maxWidth: 200
			}, 
			(response) => {console.log({response})})
		}


    return (
        <View>
					<Text>Cadastro</Text>
					<View> 
						<TouchableOpacity onPress={openGalery}>
							<Text>Foto</Text>
						</TouchableOpacity>
					</View>
        </View>
    );
};
