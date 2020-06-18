import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <AppNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
