import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { globalStyles } from '../styles/global';

export default function Home() {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.welcomeOnWilty}>Bienvenue Simon !</Text>
            <Text style={globalStyles.titleText}>Cette application rescence toutes les notions que tu as appris cette année !</Text>
            <Text style={styles.article}>Il y a actuellement 3 articles disponibles.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeOnWilty: {
        textAlign: 'center',
        fontSize: 25,
        color: 'grey',
        letterSpacing: 2,
        paddingBottom: 15,
        marginTop: 10,
        marginBottom: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1,   
        fontFamily: 'source-sans-pro-bold-italic'
    },
    article: {
        fontFamily: 'nunito-regular',
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        marginTop: 20
    }
})

