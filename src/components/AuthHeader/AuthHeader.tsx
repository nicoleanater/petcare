import { StackHeaderProps } from "@react-navigation/stack";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styles from "./AuthHeaderStyles";
import { MenuButton } from "../MenuButton/MenuButton";

interface IProps {
	title: String;
}

export const AuthHeader: FunctionComponent<IProps & StackHeaderProps> = ({
	navigation,
	title,
}) => {
	return (
		<View style={styles.headerContainer}>
			<View style={styles.upperHeaderContainer}>
				<MenuButton onPress={() => {}} theme={"dark"} />
				<Text style={styles.headerTextStyle}>{title}</Text>
			</View>
		</View>
	);
};
