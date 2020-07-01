import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { globalReviews } from '../styles/globalReview';

export default function MLPY() {
    return (
        <ScrollView>
            <View style={globalReviews.container}>
                <View style={globalReviews.commandContainer}>
                    <Text style={globalReviews.titleText}>
                        Machine Learnina
                    </Text>

                    <View style={styles.part}>
                        <Text style={styles.partText}>
                            Régression Linéaire - Fonctions :
                        </Text>
                        <View style={styles.viewImage}>
                            <Image source={require('../assets/gradientdescentmat.png')}/>
                        </View>
                    </View>

                    <View style={styles.part}>
                        <Text style={styles.partText}>
                            Régression Linéaire - Matrices :
                        </Text>
                        <View style={styles.viewImage}>
                            <Image source={require('../assets/gradientdescentmat.png')}/>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    part: {
        borderWidth: 1,
        marginTop: 10,
    },
    partText: {
        fontWeight: 'bold',
        fontSize: 17,
        textDecorationLine: 'underline',
    },
    viewImage: {
        marginTop: 10,
        marginBottom: 10
    }
})