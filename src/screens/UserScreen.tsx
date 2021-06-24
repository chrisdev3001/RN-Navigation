import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { useEffect } from 'react'
import { Text, View } from 'react-native'
import { Styles } from '../theme/Styles'

interface Props extends StackScreenProps<any, any>{}

export const UserScreen = ({ navigation, route }: Props) => {
    /* 1° first way get params
        const userParams = JSON.stringify(props, null, 3)
        console.log(userParams)
    */

    const params = route.params

    useEffect(()=>{
        navigation.setOptions({
            title: params!.name
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
