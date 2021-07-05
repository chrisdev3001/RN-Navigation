import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator'
import { Styles } from '../theme/Styles'

/*  // Fast way for set route params interface //
interface RouteParams {
    id: number,
    name: string
}
const params = route.params as RouteParams
*/

interface Props extends StackScreenProps<RootStackParams, 'UserScreen'>{}

export const UserScreen = ({ navigation, route }: Props) => {
    /* 1° first way get params
        const userParams = JSON.stringify(props, null, 3)
        console.log(userParams)
    */

    const params = route.params

    useEffect(()=>{
        navigation.setOptions({
            title: params.name
        })
    },[])

    return (
        <View style={Styles.globalMargin}>
            <Text style={Styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}
