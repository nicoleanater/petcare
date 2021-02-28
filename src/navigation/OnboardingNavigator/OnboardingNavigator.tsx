import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BackButton } from '../../components/BackButton/BackButton';
import { CadastroAnimais } from '../../containers/Cadastro/CadastroAnimais';
import { CadastroDadosPessoais } from '../../containers/Cadastro/CadastroDadosPessoais';
import { CadastroDadosProfissionais } from '../../containers/Cadastro/CadastroDadosProfissionais';
import { CadastroEndereco } from '../../containers/Cadastro/CadastroEndereco';
import { CadastroLogin } from '../../containers/Cadastro/CadastroLogin';
import { CadastroNovoAnimal } from '../../containers/Cadastro/CadastroNovoAnimal';
import { TipoCadastro } from '../../containers/TipoCadastro/TipoCadastro';
import styles from '../AppNavigatorStyles';

const Stack = createStackNavigator();

function OnboardingNavigator() {
	return (
		<Stack.Navigator initialRouteName="Login">
			<Stack.Screen name="TipoCadastro" component={TipoCadastro} options={{
				title: '',
				headerTransparent: true,
				headerStyle: styles.header,
				headerLeft: (props) => <BackButton {...props} theme={'light'} />
			}} />
			<Stack.Screen name="CadastroDadosPessoais" component={CadastroDadosPessoais} />
			<Stack.Screen name="CadastroEndereco" component={CadastroEndereco} />
			<Stack.Screen name="CadastroAnimais" component={CadastroAnimais} />
			<Stack.Screen name="CadastroDadosProfissionais" component={CadastroDadosProfissionais} />
			<Stack.Screen name="CadastroNovoAnimal" component={CadastroNovoAnimal} />
			<Stack.Screen name="CadastroLogin" component={CadastroLogin} />
		</Stack.Navigator>
	);
}

export default OnboardingNavigator;
