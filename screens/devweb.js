import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function DEVWEB() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                My Dev Web Title
            </Text>
            <Text style={globalStyles.paragraph}>
                My Dev Web paragraph
            </Text>
        </View>
    )
}