import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { Styles } from '../theme/Styles'

interface Props extends StackScreenProps<any, any>{}

export const Page1Screen = (props:Props) => {    
    return (
        <View style={Styles.globalMargin}>
            <Text>Page 1 Screen</Text>

            <Button
                title='Ir a Screen 2'
                onPress={()=> props.navigation.navigate('Page2Screen')}    
            />
        </View>
    )
}
