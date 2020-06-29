import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewInfo({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>ReviewInfo Screen</Text>
            <Text>{ navigation.getParam('title') }</Text>
            <Text>{ navigation.getParam('body') }</Text>
        </View>
    )
}
