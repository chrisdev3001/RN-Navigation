import React from 'react'
import { Image, Text, useWindowDimensions, View } from 'react-native'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingScreen } from '../screens/SettingScreen';
import { StackNavigator } from './StackNavigator';
import { Styles } from '../theme/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export function CustomSideBar() {
  const { width } = useWindowDimensions()
  return (
    <Drawer.Navigator
      drawerPosition="left"
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={ (props) => <CustomMenu {...props} />}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

const CustomMenu = ( { navigation }: DrawerContentComponentProps<DrawerContentOptions> ) => {

  return (
    <DrawerContentScrollView>
      <View style={Styles.avatarContainer}>
        <Image 
          source={{
            uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
          }}
          style={Styles.avatar}
        />
      </View>

      <View style={Styles.menuContainer}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('StackNavigator')}
          style={Styles.menuButton}
        >
          <Text style={Styles.menuTexto}>Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('SettingScreen')}
          style={Styles.menuButton}
        >
          <Text style={Styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}