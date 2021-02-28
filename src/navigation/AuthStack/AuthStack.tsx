import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MenuDrawer from "../DrawerNavigator/DrawerNavigator";

const Stack = createStackNavigator();

function AuthStack() {
	return (
		<Stack.Navigator initialRouteName="DrawerNavigator" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="DrawerNavigator" component={MenuDrawer} />
		</Stack.Navigator>
	);
}

export default AuthStack;
