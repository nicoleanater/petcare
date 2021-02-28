import { StackHeaderProps } from "@react-navigation/stack";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styles from "./AuthHeaderStyles";
import { MenuButton } from "../MenuButton/MenuButton";
import { DrawerNavigationProp } from "@react-navigation/drawer";

interface IProps {
	navigation: DrawerNavigationProp<any, any>;
	title: String;
	theme: 'light' | 'dark;'
}

export const AuthHeader: FunctionComponent<IProps & StackHeaderProps> = ({ navigation, title }) => {
	return (
		<View style={styles.headerContainer}>
			<View style={styles.upperHeaderContainer}>
				<MenuButton onPress={() => navigation.openDrawer()} theme={"dark"} />
				<Text style={styles.headerTextStyle}>{title}</Text>
				<View style={styles.rightMenuButton}/>
			</View>
		</View>
	);
};
