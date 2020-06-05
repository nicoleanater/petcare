import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import LoginScreen from './src/Containers/LoginScreen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/Navigation/AppNavigator';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <AppNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
