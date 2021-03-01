import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MenuDrawerContent from "../../components/MenuDrawerContent/MenuDrawerContent";
import CompromissosScreen from '../../containers/CompromissosScreen/CompromissosScreen';
import HomeScreen from '../../containers/HomeScreen/HomeScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
	return (
		<Stack.Navigator initialRouteName="DrawerNavigator">
			<Stack.Screen name="Compromissos" component={CompromissosScreen} />
      <Stack.Screen name="Feed" component={HomeScreen} />
		</Stack.Navigator>
	);
}

function AuthStack() {
	return (
		<Drawer.Navigator initialRouteName="DrawerStackNavigator" drawerContent={props => <MenuDrawerContent {...props}/>}>
			<Drawer.Screen name="DrawerStackNavigator" component={DrawerStack} />
		</Drawer.Navigator>
	);
}

export default AuthStack;
