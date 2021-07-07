import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingScreen } from '../screens/SettingScreen';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export function SideBar() {
  return (
    <Drawer.Navigator
      drawerPosition="left"
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home '}} component={StackNavigator} />
      <Drawer.Screen name="SettingScreen" options={{ title: 'Settings'}} component={SettingScreen} />
    </Drawer.Navigator>
  );
}