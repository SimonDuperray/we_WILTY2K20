import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NeuSpinner, NeuButton, NeuView, NeuSwitch, NeuBorderView } from 'react-native-neu-element';
import { LinearGradient } from 'expo';

import { globalStyles } from '../styles/global';

export default function Home() {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.newWelcomeOnWilty} onPress={() => {
                alert('hello');
            }}>Bienvenue Simon !</Text>

            <View style={styles.boxesContainer}>
                {/* <View style={styles.firstRow}>
                    <NeuView color="#F5B041" height={80} width={145} borderRadius={16} style={{marginRight: 15}}
                        inset
                    >
                        <Text style={{color:'#fff', fontFamily:'roboto-bold', fontSize:20}}>number1</Text>
                    </NeuView>
                    <NeuView color="#F5B041" height={80} width={145} borderRadius={16} style={{marginLeft: 5}}
                        inset
                    >
                        <Text style={{color:'#fff', fontFamily:'roboto-bold', fontSize:20}}>number2</Text>
                    </NeuView>
                </View>
                <View style={styles.secondRow}>
                    <NeuView color='#5DADE2' height={100} width={310} borderRadius={16} style={{marginTop: 30}}
                        inset
                    >
                        <Text style={{color:'#fff', fontFamily:'roboto-bold', fontSize:20}}>number 3</Text>
                    </NeuView>
                </View> */}

                <View style={styles.firstRow}>
                    <Text style={styles.secondChoice1}>number1</Text>
                    <Text style={styles.secondChoice2}>number2</Text>
                </View>
                <View style={styles.secondChoiceRow}>
                    <Text style={styles.test}>number3</Text>
                </View>

                <NeuView color='#eef2f9' height={50} width={200} borderRadius={16} style={{}}>
                <Text>{'\u00A9'} SimonDuperray</Text>
                </NeuView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    newWelcomeOnWilty: {
        backgroundColor: "#EC7063",
        textAlign: 'center',
        padding: 25,
        color: "#fff",
        fontSize: 25,
        marginBottom: 10,
        borderRadius: 16,
        fontFamily: 'roboto-bold',
        shadowColor: "#000",
        shadowOffset: {width: 1,height: 12},
        elevation: 10,
    },
    boxesContainer: {
        marginTop: 70,
        flexWrap: 'wrap',
    },
    firstRow: {
        flexWrap: 'wrap',
        height: 80,
    },
    secondChoice1: {
        backgroundColor: '#F5B041',
        height: 80,
        width: 145,
        borderRadius: 16,
        textAlign: 'center', 
        marginRight: 15,
        color: "#fff",
        fontFamily: 'roboto-bold',
        fontSize: 20,
        textAlignVertical: 'center',
        shadowColor: "#000",
        shadowOffset: {width: 1,height: 12},
        elevation: 30,
    },
    secondChoice2: {
        backgroundColor: '#F5B041',
        height: 80,
        width: 145,
        borderRadius: 16,
        textAlign: 'center', 
        marginLeft: 10,
        color: "#fff",
        fontFamily: 'roboto-bold',
        fontSize: 20,
        textAlignVertical: 'center',
        shadowColor: "#000",
        shadowOffset: {width: 1,height: 12},
        elevation: 30,
    },
    secondChoiceRow: {
        backgroundColor: '#5DADE2',
        height: 95,
        borderRadius: 16,
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: {width: 1,height: 12},
        elevation: 54,
    },
    test: {
        textAlign: 'center',
        color: "#fff",
        fontFamily: 'roboto-bold',
        fontSize: 23,
        textAlignVertical: 'center',
        top: 20
    },
    copyright: {
        marginTop: 200,
        marginLeft: 80,
        marginRight: 50,
        width: 'auto',
        textAlign: 'center',
        borderWidth: 1
    }
})

