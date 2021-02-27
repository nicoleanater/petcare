import React, { FunctionComponent } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Images } from '../../themes';
import styles from './TipoCadastroStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TipoUsuario } from '../../models/Usuario';
import { useStore } from '../../store';
import { usuarioActions } from '../../store/usuario';
import { useNavigation } from '@react-navigation/native';

export const TipoCadastro: FunctionComponent<any> = () => {
	const [, dispatch] = useStore();
	const navigation = useNavigation();

	const onTipoSelected = (tipoUsuario: TipoUsuario) => {
		dispatch(usuarioActions.setUsuario({tipo_usuario: tipoUsuario}));
		navigation.navigate('CadastroDadosPessoais');
	}

    return (
        <View style={styles.mainContainer}>
					<LinearGradient
						colors={[Colors.gradientPink, Colors.gradientPeach]}
						start={{x: 0.4, y: 0}} end={{x: 0.8, y: 1.5}}
						style={styles.upperGradientContainer}>
						<Text style={[styles.textDescription, styles.marginBottom]}>Bem-vindo ao <Text style={styles.textBold}>PetCare</Text>!</Text>
						<Text style={styles.textDescription}>Primeiro precisamos saber</Text>
						<Text style={styles.textDescription}>que tipo de perfil você</Text>
						<Text style={styles.textDescription}>gostaria de criar</Text>
					</LinearGradient>
					<View style={styles.optionsContainer}>
						<TouchableOpacity onPress={() => onTipoSelected(TipoUsuario.DONO_DE_ANIMAL)} style={[styles.optionTile, styles.tileDivider]}>
							<Image source={Images.pawGradient} style={styles.smallMarginRight}/>
							<Text style={styles.tileText}>Sou Dono de Animal</Text>
							<Icon name={'keyboard-arrow-right'} style={styles.arrowRightStyle} size={42}/>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => onTipoSelected(TipoUsuario.PET_SITTER)} style={styles.optionTile}>
							<Image source={Images.dogGradient} style={styles.smallMarginRight}/>
							<Text style={styles.tileText}>Sou Pet Sitter</Text>
							<Icon name={'keyboard-arrow-right'} style={styles.arrowRightStyle} size={42}/>
						</TouchableOpacity>
					</View>
					
        </View>
    );
};
