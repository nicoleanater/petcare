import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { MenuDrawerContent } from "../../components/MenuDrawerContent/MenuDrawerContent";
import { AgendarCompromissoScreen } from "../../containers/AgendarCompromissoScreen/AgendarCompromissoScreen";
import { AvaliacaoScreen } from "../../containers/AvaliacaoScreen/AvaliacaoScreen";
import { CompromissosScreen } from '../../containers/CompromissosScreen/CompromissosScreen';
import { DetalhesCompromissoScreen } from "../../containers/DetalhesCompromissoScreen/DetalhesCompromissoScreen";
import { MensagensDetailsScreen } from "../../containers/MensagensDetailsScreen/MensagensDetailsScreen";
import { MensagensListScreen } from "../../containers/MensagensListScreen/MensagensListScreen";
import { PerfilScreen } from "../../containers/PerfilScreen/PerfilScreen";
import { PesquisarScreen } from "../../containers/PesquisarScreen/PesquisarScreen";
import styles from '../AppNavigatorStyles';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
	return (
		<Stack.Navigator initialRouteName="Compromissos">
			<Stack.Screen name="Compromissos" component={CompromissosStack} options={{ headerShown: false }}/>
      <Stack.Screen name="Pesquisar" component={PesquisarScreen} />
      <Stack.Screen name="Perfil" component={PerfilScreen} options={{	headerTransparent: true }} />
      <Stack.Screen name="AgendarCompromisso" component={AgendarCompromissoScreen} />
      <Stack.Screen name="Mensagens" component={ChatStack} options={{ headerShown: false }}/>
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

function ChatStack() {
	return (
		<Stack.Navigator initialRouteName="Mensagens">
			<Stack.Screen name="Mensagens" component={MensagensListScreen} />
			<Stack.Screen name="MensagensDetails" component={MensagensDetailsScreen} />
		</Stack.Navigator>
	)
}

export default AuthStack;
