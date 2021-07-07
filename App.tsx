
import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { StackNavigator } from './src/navigator/StackNavigator'
import { SideBar } from './src/navigator/SideBar'

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideBar />
    </NavigationContainer>
  )
}

export default App