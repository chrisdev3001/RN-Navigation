import React from 'react'
import { View, Text , Button} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { Styles } from '../theme/Styles'

interface Props extends StackScreenProps<any, any>{}

export const Page3Screen = ({ navigation }: Props) => {

    return (
        <View style={Styles.globalMargin}>
            <Text style={Styles.title}>Page 3 Screen</Text>
            <Button
                title='Regresar'
                onPress={()=> navigation.pop()}    
            />
            <Button
                title='Ir a Screen 1'
                onPress={()=> navigation.popToTop()}    
            />
        </View>
    )
}
