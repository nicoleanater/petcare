import React from 'react';
import LoginScreen from "../../Containers/LoginScreen/LoginScreen";

import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Cadastro } from '../../Containers/Cadastro/Cadastro';

const Stack = createNativeStackNavigator();

function OnboardingNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}

export default OnboardingNavigator;