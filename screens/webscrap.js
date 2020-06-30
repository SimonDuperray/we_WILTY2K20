import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function WEBSCRAP() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                My Web Scraping Title
            </Text>
            <Text style={globalStyles.paragraph}>
                My Web Scraping paragraph
            </Text>
        </View>
    )
}