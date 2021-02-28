import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CompromissoScreen from '../../containers/CompromissoScreen/CompromissoScreen';
import HomeScreen from '../../containers/HomeScreen/HomeScreen';
import DrawerContent from "../DrawerContent/DrawerContent";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
	return (
		<Stack.Navigator initialRouteName="DrawerNavigator">
			<Stack.Screen name="Compromisso" component={CompromissoScreen} />
      <Stack.Screen name="Feed" component={HomeScreen} />
		</Stack.Navigator>
	);
}

function AuthStack() {
	return (
		<Drawer.Navigator initialRouteName="DrawerStackNavigator" drawerContent={props => <DrawerContent {...props}/>}>
			<Drawer.Screen name="DrawerStackNavigator" component={DrawerStack} />
		</Drawer.Navigator>
	);
}

export default AuthStack;