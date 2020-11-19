import React from 'react';
import LoginScreen from "../../containers/LoginScreen/LoginScreen";

import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Cadastro } from '../../containers/Cadastro/Cadastro';
import { TipoCadastro } from '../../containers/TipoCadastro/TipoCadastro';

const Stack = createNativeStackNavigator();

function OnboardingNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="TipoCadastro" component={TipoCadastro} options={{title: ''}}/>
    </Stack.Navigator>
  );
}

export default OnboardingNavigator;