import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { Colors } from '../theme/Styles';

const Tab = createBottomTabNavigator()

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        activeTintColor: 'red',
        style: {
          borderTopColor: Colors.primary,
          borderTopWidth: 0, // <-- ios border
          elevation: 0  // <-- android border
        }
      }}
    >
      <Tab.Screen name="Tab1Screen" options={{title: 'tab1'}} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{title: 'tab2'}} component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" options={{title: 'stack'}} component={StackNavigator} />
    </Tab.Navigator>
  );
}