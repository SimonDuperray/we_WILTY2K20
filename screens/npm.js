import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function NPM() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                My NPM Title
            </Text>
            <Text style={globalStyles.paragraph}>
                My NPM paragraph
            </Text>
        </View>
    )
}