import React, { FunctionComponent } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./MenuButtonStyles";
import { StackHeaderLeftButtonProps } from "@react-navigation/stack";

interface IProps {
	theme: "light" | "dark";
}

export const MenuButton: FunctionComponent<
	IProps & StackHeaderLeftButtonProps
> = (props) => {
	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={styles.menuButtonContainer}
		>
			<Icon
				name={"menu"}
				style={
					props.theme === "light"
						? styles.menuButtonLight
						: styles.menuButtonDark
				}
				size={18}
			/>
		</TouchableOpacity>
	);
};
