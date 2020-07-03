import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function JSVANILLA() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                My JSVANILLA Title
            </Text>
            <Text style={globalStyles.paragraph}>
                My JSVANILLA paragraph
            </Text>
        </View>
    )
}