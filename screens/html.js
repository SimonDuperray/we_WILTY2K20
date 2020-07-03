import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HTML() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                My HTML Title
            </Text>
            <Text style={globalStyles.paragraph}>
                My HTML paragraph
            </Text>
        </View>
    )
}