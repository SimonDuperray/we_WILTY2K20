import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function CSS() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                My CSS Title
            </Text>
            <Text style={globalStyles.paragraph}>
                My CSS paragraph
            </Text>
        </View>
    )
}