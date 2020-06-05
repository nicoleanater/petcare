import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../Containers/HomeScreen/HomeScreen';

const Drawer = createDrawerNavigator();

function MenuDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default MenuDrawer;