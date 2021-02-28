import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../containers/HomeScreen/HomeScreen';
import CompromissoScreen from '../../containers/CompromissoScreen/CompromissoScreen';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerContent from './DrawerContent';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerStack = () => {
	return (
		<Stack.Navigator initialRouteName="DrawerNavigator">
			<Stack.Screen name="Compromisso" component={CompromissoScreen} />
      <Stack.Screen name="Feed" component={HomeScreen} />
		</Stack.Navigator>
	);
}

const MenuDrawer = () => {
  return (
		<Drawer.Navigator initialRouteName="DrawerStackNavigator" drawerContent={props => <DrawerContent {...props}/>}>
			<Drawer.Screen name="DrawerStackNavigator" component={DrawerStack} options={{ header: false }}/>
		</Drawer.Navigator>
  );
}

export default MenuDrawer;

// header={({ scene }) => {
// 	const { options } = scene.descriptor;
// 	const title =
// 		options.headerTitle !== undefined
// 			? options.headerTitle
// 			: options.title !== undefined
// 			? options.title
// 			: scene.route.name;

// 	return (
// 		<View>
// 			<Text>{title}</Text>
// 			<Text>teste</Text>
// 		</View>
// 	)}}>
