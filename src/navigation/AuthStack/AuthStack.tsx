import React from "react";
import CompromissoScreen from "../../containers/CompromissoScreen/CompromissoScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function AuthStack() {
	return (
		<Stack.Navigator initialRouteName="Compromisso">
			<Stack.Screen name="Compromisso" component={CompromissoScreen} />
		</Stack.Navigator>
	);
}

export default AuthStack;
