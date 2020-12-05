import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { FunctionComponent, useLayoutEffect, useState } from 'react';
import { View } from 'react-native';
import { HeaderCadastro } from '../../components/HeaderCadastro/HeaderCadastro';
import { ImageGradientPicker } from '../../components/ImageGradientPicker/ImageGradientPicker';
import { useStore } from '../../store';
import styles from './CadastroDadosPessoaisStyles';

interface IProps {
    // Props type definition
}

interface IState {
	image: string;
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




    return (
        <View style={styles.mainContainer}>
					<ImageGradientPicker isPicker image={image} pickerCallback={setImage}/>
        </View>
    );
};
