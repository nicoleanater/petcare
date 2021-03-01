import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { LoginScreen } from "../containers/LoginScreen/LoginScreen";
import { useStore } from "../store";
import AuthStack from "./AuthStack/AuthStack";
import OnboardingNavigator from "./OnboardingNavigator/OnboardingNavigator";


const Stack = createNativeStackNavigator();

function AppNavigator() {
	const [{ usuario }] = useStore();
	const initialRoute = usuario.id == null ? 'Login' : 'AuthStack';

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
			<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
			<Stack.Screen name="OnboardingNavigator" component={OnboardingNavigator} />
			<Stack.Screen name="AuthStack" component={AuthStack} />
		</Stack.Navigator>
	);
}

export default AppNavigator;
