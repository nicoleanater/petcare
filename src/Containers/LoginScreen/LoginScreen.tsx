import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
	const navigation = useNavigation();
  return (
    <View>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
        <Text>TESTEEEEE LOGIN a</Text>
				<TouchableOpacity onPress={() => {navigation.navigate('Cadastro', {teste: 'teste'})}}>
					<Text>Cadastrar</Text>
				</TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default LoginScreen;
