import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Info({ navigation }) {

    return (
        <View style={globalStyles.container}>
            <Text>Info screen</Text>
            <Text>{ navigation.getParam('title') }</Text>
            <Text>{ navigation.getParam('body') }</Text>
            <Text>{ navigation.getParam('rating') }</Text>
        </View>
    )
}