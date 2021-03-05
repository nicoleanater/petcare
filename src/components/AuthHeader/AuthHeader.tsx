import { StackHeaderProps } from "@react-navigation/stack";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styles from "./AuthHeaderStyles";
import { MenuButton } from "../MenuButton/MenuButton";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

interface IProps {
	title: String;
	theme: 'light' | 'transparent';
}

export const AuthHeader: FunctionComponent<IProps & StackHeaderProps> = ({ title, theme }) => {
	const navigation = useNavigation<DrawerNavigationProp<any, any>>();
	return (
		<View style={[styles.headerContainer, theme === 'transparent' && styles.headerContainerTransparent]}>
			<View style={styles.upperHeaderContainer}>
				<MenuButton onPress={() => navigation.openDrawer()} theme={theme === 'light' ? 'dark' : 'light'} />
				<Text style={[styles.headerTextStyle, theme === 'transparent' && styles.headerTextTransparentStyle]}>{title}</Text>
				<View style={[styles.rightMenuButton, theme === 'transparent' && styles.headerTextTransparentStyle]}/>
			</View>
		</View>
	);
};
