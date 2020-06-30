import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function GIT() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                My Git Title
            </Text>
            <Text style={globalStyles.paragraph}>
                My Git paragraph
            </Text>
        </View>
    )
}