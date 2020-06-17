import React from 'react';

import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import OnboardingNavigator from './OnboardingNavigator/OnboardingNavigator';
import MenuDrawer from './DrawerNavigator/DrawerNavigator';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="OnboardingNavigator">
      <Stack.Screen name="OnboardingNavigator" component={OnboardingNavigator} />
      <Stack.Screen name="DrawerNavigator" component={MenuDrawer} />
    </Stack.Navigator>
  );
}

export default AppNavigator;