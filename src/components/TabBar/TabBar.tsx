import React, { FunctionComponent, useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./TabBarStyles";

interface IProps {
	menus: Array<MenuItem>;
}

interface MenuItem {
	id: React.ReactText;
	title: String;
}

export const TabBar: FunctionComponent<IProps> = ({ menus = [] }) => {
	const [menuSelected, setMenuSelected] = useState(
		menus.length ? menus[0].id : null
	);
	return (
		<View style={styles.tabBarContainer}>
			{menus.map((item) => {
				return (
					<View key={item.id} style={styles.menuItem}>
						<TouchableOpacity
							onPress={() => setMenuSelected(item.id)}
						>
							<Text style={styles.menuItemTitle}>
								{item.title}
							</Text>
						</TouchableOpacity>
						<Text
							style={
								menuSelected === item.id
									? styles.menuItemSelected
									: null
							}
						/>
					</View>
				);
			})}
		</View>
	);
};
