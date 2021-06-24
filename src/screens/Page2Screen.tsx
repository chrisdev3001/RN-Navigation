import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { Styles } from '../theme/Styles'
import { useNavigation } from '@react-navigation/native'

export const Page2Screen = () => {
    const navigator = useNavigation()

    return (
        <View style={Styles.globalMargin}>
            <Text style={Styles.title}>Page 2 Screen</Text>

            <Button
                title='Ir a Screen 3'
                onPress={()=> navigator.navigate('Page3Screen')}    
            />
        </View>
    )
}
