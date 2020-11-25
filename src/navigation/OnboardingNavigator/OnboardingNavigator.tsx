import React from 'react';
import LoginScreen from "../../containers/LoginScreen/LoginScreen";
import { createStackNavigator } from '@react-navigation/stack'
import { CadastroDadosPessoais } from '../../containers/Cadastro/CadastroDadosPessoais';
import { TipoCadastro } from '../../containers/TipoCadastro/TipoCadastro';
import styles from '../AppNavigatorStyles';
import { BackButton } from '../../components/BackButton/BackButton';

const Stack = createStackNavigator();

function OnboardingNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="TipoCadastro" component={TipoCadastro} options={{
				title: '',
				headerTransparent: true,
				headerStyle: styles.header,
				headerLeft: (props) => <BackButton {...props} />
			}}/>
      <Stack.Screen name="CadastroDadosPessoais" component={CadastroDadosPessoais} />

    </Stack.Navigator>
  );
}

export default OnboardingNavigator;