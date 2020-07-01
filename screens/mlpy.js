import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { globalReviews } from '../styles/globalReview';
import { Puce } from '../components/puceList';

export default function MLPY() {
    return (
        <ScrollView>
            <View style={globalReviews.container}>
                <View style={globalReviews.commandContainer}>
                    <Text style={globalReviews.titleText}>
                        Machine Learnina
                    </Text>
                    <View style={styles.part}>
                        <Text style={styles.partTitle}>
                            Régression Linéaire - Fonctions :
                        </Text>
                        <View style={styles.summary}>
                            <Text style={styles.formAnouncement}>Formulaire</Text>
                            <View style={styles.viewImage}>
                                <Text style={styles.textBeforeImage}>Fonction du modèle</Text>
                                <Image source={require('../assets/fonctionmodelfon.png')}/>
                            </View>
                            <View style={styles.viewImage}>
                                <Text style={styles.textBeforeImage}>Fonction Coût</Text>
                                <Image source={require('../assets/fonctioncoutfon.png')}/>
                            </View>
                            <View style={styles.viewImage}>
                                <Text style={styles.textBeforeImage}>Gradients</Text>
                                <Image source={require('../assets/gradientfon.png')}/>
                            </View>
                            <View style={styles.viewImage}>
                                <Text style={styles.textBeforeImage}>Descente de Gradient</Text>
                                <Image source={require('../assets/gradientdescentfon.png')}/>
                            </View>
                        </View>
                    </View>

                    <View style={styles.part}>
                        <Text style={styles.partTitle}>
                            Régression Linéaire - Matrices :
                        </Text>
                        <View style={styles.summary}>
                            <Text style={styles.formAnouncement}>Formulaire</Text>
                            <View style={styles.viewImage}>
                                <Text style={styles.textBeforeImage}>Fonction du modèle</Text>
                                <Image source={require('../assets/fonctionmodelmat.png')}/>
                            </View>
                            <View style={styles.viewImage}>
                                <Text style={styles.textBeforeImage}>Fonction Coût</Text>
                                <Image source={require('../assets/fonctioncoutmat.png')}/>
                            </View>
                            <View style={styles.viewImage}>
                                <Text style={styles.textBeforeImage}>Gradient</Text>
                                <Image source={require('../assets/gradientmat.png')}/>
                            </View>
                            <View style={styles.viewImage}>
                                <Text style={styles.textBeforeImage}>Descente de Gradient</Text>
                                <Image source={require('../assets/gradientdescentmat.png')}/>
                            </View>
                        </View>
                    </View>

                    <View style={styles.part}>
                        <Text style={styles.partTitle}>Fonction Coût - MSE</Text>
                        <View style={styles.flexRow}>
                            <Puce />
                            <Text style={styles.Text}>
                                La fonction coût ou Erreur Quadratique Moyenne (Mean Squarred Error) est un algorithme de minimisation.
                            </Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Puce />
                            <Text style={styles.Text}>Il y a deux méthodes principales pour trouver le minimum de la fonction étudiée :</Text>
                        </View>
                        
                        <View style={styles.flexRow}>
                            <Puce />
                            <Text style={styles.bold}>Moindres Carrés</Text>
                            <Text> et </Text>
                            <Text style={styles.bold}>Descente de Gradient</Text>
                        </View>
                    </View>

                    <View style={styles.part}>
                        <Text style={styles.partTitle}>Méthode des Moindres Carrés</Text>

                        <View style={styles.flexRow}>
                            <Puce />
                            <Text style={styles.Text}>
                                Cette méthode revient à chercher le point a (minimum) tel que la tangente en J sera horizontale (pente nulle).
                            </Text>
                        </View>

                        <View style={styles.flexRow}>
                            <Puce />
                            <Text style={styles.Text}>
                                Mais cette méthode nous pose un soucis, elle nécessite une inversion de matrice, ce qui peut devenir très lourd si le dataset contient beaucoup de données.
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    part: {
        marginTop: 10,
    },
    partTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        textDecorationLine: 'underline',
    },
    viewImage: {
        marginTop: 10,
        marginBottom: 10
    },
    textBeforeImage: {
        paddingBottom: 5
    },
    summary: {
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 5,
        padding: 5, 
        marginBottom: 10
    },
    formAnouncement: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#333'
    },
    flexRow: {
        flexDirection: 'row'
    },
    bold: {
        fontWeight: 'bold'
    },
    Text: {
        marginBottom: 10
    }
})