import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';

export default function MLPY() {
    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <Text style={globalStyles.titleText}>
                    My Machine Learning Title
                </Text>
                <Text style={globalStyles.paragraph}>
                    My Machine Learning paragraph
                </Text>
            </View>
        </ScrollView>
    )
}