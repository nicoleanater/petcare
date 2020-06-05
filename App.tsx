import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import LoginScreen from './src/Containers/LoginScreen/LoginScreen';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <LoginScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
