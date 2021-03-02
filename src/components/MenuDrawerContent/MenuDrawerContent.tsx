import { DrawerContentScrollView } from '@react-navigation/drawer';
import React, { FunctionComponent } from 'react';
import { Text, View } from "react-native";
import { Colors } from '../../themes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './MenuDrawerContentStyles';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useStore } from '../../store';
import { usuarioActions } from '../../store/usuario';
import { ImageGradientPicker } from '../ImageGradientPicker/ImageGradientPicker'
import { getTipoUsuario } from '../../utils/EnumToString';
import { TipoUsuario } from '../../models/Usuario';

const MenuDrawerContent: FunctionComponent<any> = (props) => {
	const [{ usuario }, dispatch] = useStore();

	const onLogoutPressed = () => {
		dispatch(usuarioActions.resetToInitialState());
		props.navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
	}

	return (
		<View style={styles.mainContainer}>
			<LinearGradient colors={[Colors.gradientPink, Colors.gradientPeach]} style={styles.gradientBackground} start={{x: 0, y: 0.5}} end={{x: 0.9, y: 0.6}}>
				<DrawerContentScrollView {...props} style={styles.fullWidthContainer}>
					<TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={[styles.alignSelfEnd]}>
						<Icon name={'close'} style={styles.closeIconStyle} size={24} />
					</TouchableOpacity>
					<View style={styles.userInfoContainer}>
						<ImageGradientPicker
							image={usuario.foto}
							style={styles.smallMarginBottom}
							noBorder
						/>
						<Text style={styles.nameTextStyle}>{usuario.nome}</Text>
						<Text style={styles.userTypeTextStyle}>{getTipoUsuario(usuario.tipo_usuario)}</Text>
					</View>
					<View>
						{/* <TouchableOpacity onPress={() => props.navigation.navigate('Perfil')} style={styles.menuItemContainer}>
							<Text style={styles.menuLabelStyle}>Perfil</Text>
						</TouchableOpacity> */}
						<TouchableOpacity onPress={() => props.navigation.navigate('Compromissos')} style={styles.menuItemContainer}>
							<Text style={styles.menuLabelStyle}>Compromissos</Text>
						</TouchableOpacity>
						{/* <TouchableOpacity onPress={() => props.navigation.navigate('Mensagens')} style={[styles.menuItemContainer, usuario.tipo_usuario === TipoUsuario.PET_SITTER && styles.lastMenuItem]}>
							<Text style={styles.menuLabelStyle}>Mensagens</Text>
						</TouchableOpacity> */}
						{usuario.tipo_usuario === TipoUsuario.DONO_DE_ANIMAL &&
							<TouchableOpacity onPress={() => props.navigation.navigate('Pesquisar')} style={[styles.menuItemContainer, styles.lastMenuItem]}>
								<Text style={styles.menuLabelStyle}>Pesquisar</Text>
							</TouchableOpacity>
						}
					</View>
				</DrawerContentScrollView>
				<TouchableOpacity onPress={onLogoutPressed} style={styles.logoutButton}>
					<Icon name={'power-settings-new'} style={styles.logoutIconStyle} size={24} />
					<Text style={styles.menuLabelStyle}>Sair</Text>
				</TouchableOpacity>
			</LinearGradient>
		</View>
	);
};

export default MenuDrawerContent;
