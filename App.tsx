import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

declare const global: {HermesInternal: null | {}};

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
  require('react-devtools');
}

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
