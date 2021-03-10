import { StackHeaderProps } from "@react-navigation/stack";
import React, { FunctionComponent, useState } from "react";
import { Text, View } from "react-native";
import styles from "./AuthHeaderStyles";
import { MenuButton } from "../MenuButton/MenuButton";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { TipoUsuario, Usuario } from "../../models/Usuario";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps {
	title: String;
	theme: 'light' | 'transparent';
	headerRight?: false | TipoUsuario;
	usuario?: Usuario;
}

export const AuthHeader: FunctionComponent<IProps & StackHeaderProps> = ({ title, theme, headerRight, usuario }) => {
	const navigation = useNavigation<DrawerNavigationProp<any, any>>();
	const [showMenu, setShowMenu] = useState(false);

	const onAgendarCompromisso = () => {
		navigation.navigate('AgendarCompromisso', { usuario })
	}

	return (
		<View style={[styles.headerContainer, theme === 'transparent' && styles.headerContainerTransparent]}>
			<View style={styles.upperHeaderContainer}>
				<MenuButton onPress={() => navigation.openDrawer()} theme={theme === 'light' ? 'dark' : 'light'} />
				<Text style={[styles.headerTextStyle, theme === 'transparent' && styles.headerTextTransparentStyle]}>{title}</Text>
				{!headerRight
					?	<View style={styles.rightMenuButton}/>
					:	<>
							<TouchableOpacity
								onPress={() => setShowMenu((prev) => !prev)}
								style={[styles.rightMenuButton, theme === 'transparent' && styles.headerTextTransparentStyle]}>
								<Icon name={'more-vert'} style={theme === 'light' ? styles.menuButtonDark : styles.menuButtonLight} size={25}/>
							</TouchableOpacity>
							{showMenu && headerRight === TipoUsuario.PET_SITTER &&
								<View style={styles.rightMenuContainer}>
									<TouchableOpacity style={styles.menuItemContainer}>
										<Text style={styles.menuTextStyle}>Enviar Mensagem</Text>
									</TouchableOpacity>
									<TouchableOpacity style={[styles.menuItemContainer, styles.menuDivider]} onPress={onAgendarCompromisso}>
										<Text style={styles.menuTextStyle}>Agendar Compromisso</Text>
									</TouchableOpacity>
								</View>
							}
							{showMenu && headerRight === TipoUsuario.DONO_DE_ANIMAL &&
								<View style={styles.rightMenuContainer}>
									<TouchableOpacity style={styles.menuItemContainer}>
										<Text style={styles.menuTextStyle}>Enviar Mensagem</Text>
									</TouchableOpacity>
								</View>
							}
						</>
				}
			</View>
		</View>
	);
};
