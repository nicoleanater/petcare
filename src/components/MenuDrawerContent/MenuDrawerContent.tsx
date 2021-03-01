import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { FunctionComponent } from 'react';
import { Text, View } from "react-native";
import { Colors } from '../../themes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './MenuDrawerContentStyles';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useStore } from '../../store';
import { usuarioActions } from '../../store/usuario';
import { StackActions } from '@react-navigation/native';

const MenuDrawerContent: FunctionComponent<any> = (props) => {
	const [, dispatch] = useStore();

	const onLogoutPressed = () => {
		dispatch(usuarioActions.resetToInitialState());
		props.navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
	}

	return (
		<View style={styles.mainContainer}>
			<LinearGradient colors={[Colors.gradientPink, Colors.gradientPeach]} style={styles.gradientBackground} start={{x: 0, y: 0.5}} end={{x: 0.9, y: 0.6}}>
				<DrawerContentScrollView {...props} style={styles.fullWidthContainer}>
					<View>
						<TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={[styles.alignSelfEnd]}>
							<Icon name={'close'} style={styles.closeIconStyle} size={24} />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => props.navigation.navigate('AuthStack', { screen: 'Perfil' })} style={styles.menuItemContainer}>
							<Text style={styles.menuLabelStyle}>Perfil</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => props.navigation.navigate('AuthStack', { screen: 'Compromisso' })} style={styles.menuItemContainer}>
							<Text style={styles.menuLabelStyle}>Compromissos</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => props.navigation.navigate('AuthStack', { screen: 'Mensagens' })} style={styles.menuItemContainer}>
							<Text style={styles.menuLabelStyle}>Mensagens</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => props.navigation.navigate('AuthStack', { screen: 'Pesquisar' })} style={styles.menuItemContainer}>
							<Text style={styles.menuLabelStyle}>Pesquisar</Text>
						</TouchableOpacity>
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
