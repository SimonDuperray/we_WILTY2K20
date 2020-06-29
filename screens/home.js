import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { globalStyles } from '../styles/global';

export default function Home() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Bienvenue sur WILTY !</Text>
            <Text style={globalStyles.titleText}>Cette application rescence toutes les notions que tu as appris cette année !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})