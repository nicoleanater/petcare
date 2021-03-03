import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MenuDrawerContent from "../../components/MenuDrawerContent/MenuDrawerContent";
import { AvaliacaoScreen } from "../../containers/AvaliacaoScreen/AvaliacaoScreen";
import CompromissosScreen from '../../containers/CompromissosScreen/CompromissosScreen';
import { DetalhesCompromissoScreen } from "../../containers/DetalhesCompromissoScreen/DetalhesCompromissoScreen";
import HomeScreen from '../../containers/HomeScreen/HomeScreen';
import { PesquisarScreen } from "../../containers/PesquisarScreen/PesquisarScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
	return (
		<Stack.Navigator initialRouteName="Compromissos">
			<Stack.Screen name="Compromissos" component={CompromissosStack} options={{ headerShown: false }}/>
      <Stack.Screen name="Pesquisar" component={PesquisarScreen} />
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

function CompromissosStack() {
	return (
		<Stack.Navigator initialRouteName="Compromissos">
			<Stack.Screen name="Compromissos" component={CompromissosScreen} />
			<Stack.Screen name="DetalhesCompromisso" component={DetalhesCompromissoScreen} />
			<Stack.Screen name="Avaliacao" component={AvaliacaoScreen} />
		</Stack.Navigator>
	)
}

export default AuthStack;
