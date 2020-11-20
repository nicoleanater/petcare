import React from 'react';
import LoginScreen from "../../containers/LoginScreen/LoginScreen";
import { createStackNavigator } from '@react-navigation/stack'
import { Cadastro } from '../../containers/Cadastro/Cadastro';
import { TipoCadastro } from '../../containers/TipoCadastro/TipoCadastro';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../AppNavigatorStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function OnboardingNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="TipoCadastro" component={TipoCadastro} options={{
				title: '',
				headerTransparent: true,
				headerStyle: styles.header,
				headerLeft: (props) => (
					<TouchableOpacity onPress={props.onPress} style={styles.backButtonContainer}>
						<Icon name={'keyboard-arrow-left'} style={styles.backButton} size={46}/>
					</TouchableOpacity>
				)
			
			}}/>
    </Stack.Navigator>
  );
}

export default OnboardingNavigator;