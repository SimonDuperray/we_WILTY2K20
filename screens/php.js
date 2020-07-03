import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function PHP() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                My PHP Title
            </Text>
            <Text style={globalStyles.paragraph}>
                My PHP paragraph
            </Text>
        </View>
    )
}