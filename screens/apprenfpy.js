import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function APPRENFPY() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                My Renforcement Learning Title
            </Text>
            <Text style={globalStyles.paragraph}>
                My Renforcement Learning paragraph
            </Text>
        </View>
    )
}