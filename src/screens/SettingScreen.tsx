import React from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Styles } from '../theme/Styles'

export const SettingScreen = () => {
    const insets = useSafeAreaInsets()
    return (
        <View 
            style={{
                ...Styles.globalMargin,
                marginTop: insets.top + 20
            }}>
            <Text style={Styles.title}>Setting Screen</Text>
        </View>
    )
}
