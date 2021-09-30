import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { Styles } from '../theme/Styles';

export const Tab1Screen = () => {
    const { top } = useSafeAreaInsets()
    return (
        <View style={{
            ...Styles.globalMargin,
            marginTop: top + 20
        }}
        >
            <Text style={Styles.title}>Tab1 Screen</Text>
            <Icon name="airplane-outline" size={30} color="#900" />
        </View>
    )
}
