import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function SQL() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                My SQL Title
            </Text>
            <Text style={globalStyles.paragraph}>
                My SQL paragraph
            </Text>
        </View>
    )
}