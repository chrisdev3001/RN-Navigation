
import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { StackNavigator } from './src/navigator/StackNavigator'
// import { SideBar } from './src/navigator/SideBar'
import { CustomSideBar } from './src/navigator/CustomSideBar'

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <CustomSideBar />
    </NavigationContainer>
  )
}

export default App