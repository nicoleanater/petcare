import { StackHeaderProps } from "@react-navigation/stack";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styles from "./AuthHeaderStyles";
import { MenuButton } from "../MenuButton/MenuButton";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

interface IProps {
	title: String;
	theme: 'light' | 'dark;'
}

export const AuthHeader: FunctionComponent<IProps & StackHeaderProps> = ({ title }) => {
	const navigation = useNavigation<DrawerNavigationProp<any, any>>();
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
