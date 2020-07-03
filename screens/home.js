import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { NeuView } from 'react-native-neu-element';
import { Icon } from 'react-native-elements';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export default function Home() {
    return (
        <View style={styles.container}>

            <Text style={styles.newWelcomeOnWilty} onPress={() => {
                alert(HEIGHT);
                }}
            >
                Bienvenue Simon !
            </Text>

            <View style={styles.recoContainer}>
                <Text style={styles.recommandations}>
                    Recommandations
                </Text>
            </View>

            <View style={styles.boxesContainer}>

                <View style={styles.firstCol}>

                    <Text style={styles.topLeft}>
                        Custom Drawer
                    </Text>
                    <Text style={styles.botLeft}>
                        Arrange articles design
                    </Text>

                </View>

                <View style={styles.secondCol}>

                    <Text style={styles.topRight}>
                        Add more screens
                    </Text>
                    <Text style={styles.botRight}>
                        Add Bezier Curves
                    </Text>

                </View>

            </View>

            <View style={styles.copyright}>
                <NeuView color='#eef2f9' height={50} width={200} borderRadius={16}>
                    <Text>{'\u00A9'} SimonDuperray</Text>
                </NeuView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
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
        marginTop: 50,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    copyright: {
        marginLeft: 50,
        marginRight: 50,
        width: 'auto',
        paddingLeft: 10,
        marginTop: 25
    },
    firstCol: {
        marginRight: 10,
    },
    secondCol: {
        marginLeft: 8,
    },
    topLeft: {
        width: 150,
        height: 130,
        backgroundColor: '#F1948A',
        borderRadius: 10,
        marginBottom: 8,
        textAlign: 'center',
        color: "#fff",
        fontFamily: 'roboto-bold',
        fontSize: 17,
        shadowColor: "#000",
        shadowOffset: {width: 1,height: 12},
        elevation: 10,
        textAlignVertical: 'center'
    },
    botLeft: {
        width: 150,
        height: 200,
        backgroundColor: '#E59866',
        borderRadius: 10,
        marginTop: 8,
        textAlign: 'center',
        color: "#fff",
        fontFamily: 'roboto-bold',
        fontSize: 17,
        shadowColor: "#000",
        shadowOffset: {width: 1,height: 12},
        elevation: 10,
        textAlignVertical: 'center'
    },
    topRight: {
        width: 150,
        height: 200,
        backgroundColor: '#EB984E',
        borderRadius: 10,
        marginBottom: 8,
        textAlign: 'center',
        color: "#fff",
        fontFamily: 'roboto-bold',
        fontSize: 17,
        shadowColor: "#000",
        shadowOffset: {width: 1,height: 12},
        elevation: 10,
        textAlignVertical: 'center'
    },
    botRight: {
        width: 150,
        height: 130,
        backgroundColor: '#F1C40F',
        borderRadius: 10,
        marginTop: 8,
        textAlign: 'center',
        color: "#fff",
        fontFamily: 'roboto-bold',
        fontSize: 17,
        shadowColor: "#000",
        shadowOffset: {width: 1,height: 12},
        elevation: 10,
        textAlignVertical: 'center'
    },
    recoContainer: {
        marginBottom: -30,
        marginTop: 30
    },
    recommandations: {
        color: "#fff",
        backgroundColor: '#F0B27A',
        borderRadius: 5,
        padding: 10,
        textAlign: 'center',
        fontFamily: "roboto-bold",
        fontSize: 20,
        shadowColor: "#000",
        shadowOffset: {width: 1,height: 12},
        elevation: 30,
    },
})