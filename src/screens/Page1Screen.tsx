import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { Styles } from '../theme/Styles'

interface Props extends StackScreenProps<any, any>{}

export const Page1Screen = (props:Props) => {    
    return (
        <View style={Styles.globalMargin}>
            <Text style={Styles.title}>Page 1 Screen</Text>

            <Button
                title='Ir a Screen 2'
                onPress={()=> props.navigation.navigate('Page2Screen')}    
            />

            <Text style={Styles.title}>Navegar a usuario Screen</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...Styles.bigButton,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={() => props.navigation.navigate('UserScreen', {
                        id: 1,
                        name: 'Chris'
                    }) }
                >
                    <Text style={Styles.bigButtonText}>Ir a Chris</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...Styles.bigButton,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={() => props.navigation.navigate('UserScreen', {
                        id: 2,
                        name: 'Maria'
                    }) }
                >
                    <Text style={Styles.bigButtonText}>Ir a Maria</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
