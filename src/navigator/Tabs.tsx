import React from 'react'
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { Colors } from '../theme/Styles';

const Tab = createBottomTabNavigator()

const iconNames: Record<string, string> = {
  Tab1Screen: 'T1',
  Tab2Screen: 'T2',
  StackNavigator: 'ST',
}

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        style: {
          borderTopColor: Colors.primary,
          borderTopWidth: 0, // <-- ios border
          elevation: 0  // <-- android border
        },
        labelStyle: {
          fontSize: 15
        }
      }}
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, focused, size }) => {                  
          const iconName = iconNames[route.name]
          return <Text style={{ color }}>{iconName}</Text>
        }
      }) }
    >
      {/* Add icon inside Tab.Screen */}
      {/* <Tab.Screen name="Tab1Screen" options={{title: 'tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>}} component={Tab1Screen} /> */}
      <Tab.Screen name="Tab1Screen" options={{title: 'tab1'}} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{title: 'tab2'}} component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" options={{title: 'stack'}} component={StackNavigator} />
    </Tab.Navigator>
  );
}