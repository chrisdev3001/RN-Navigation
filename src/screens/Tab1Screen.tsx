import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Styles } from '../theme/Styles';

export const Tab1Screen = () => {
    return (
        <View style={Styles.globalMargin}>
            <Text style={Styles.title}>Tab1 Screen</Text>
            <Icon name="airplane-outline" size={30} color="#900" />
        </View>
    )
}
