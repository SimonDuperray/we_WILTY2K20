import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { globalReviews } from '../styles/globalReviews';

export default function ReviewInfo({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalReviews.title}>{ navigation.getParam('title') }</Text>
            <Text style={globalReviews.separator}></Text>
            <Text>{ navigation.getParam('body') }</Text>
        </View>
    )
}
