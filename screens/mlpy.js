import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { globalReviews } from '../styles/globalReview';
import { Puce } from '../components/puceList';
import { NewText } from '../components/newText';

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
                            <NewText style={styles.Text}>
                                La fonction coût ou Erreur Quadratique Moyenne (Mean Squarred Error) est un algorithme de minimisation.
                            </NewText>
                        </View>
                        <View style={styles.flexRow}>
                            <Puce />
                            <NewText style={styles.Text}>
                                Il y a deux méthodes principales pour trouver le minimum de la fonction étudiée :
                            </NewText>
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

                        <Image source={require('../assets/mmc1.png')}/>
                        <Image source={require('../assets/mmc2.png')} />

                        <View style={styles.flexRow}>
                            <Puce />
                            <NewText>
                                où les ri(θ) sont les résidus du modèle, i.e. ri(θ) est l'écart entre la mesure yi et la prédiction f (xi ; θ) donnée par le modèle. S(θ) peut être considéré comme une mesure de la distance entre les données expérimentales et le modèle théorique qui prédit ces données. La prescription des moindres carrés commande que cette distance soit minimale.
                            </NewText>
                        </View>

                        <View style={styles.flexRow}>
                            <Puce />
                            <NewText style={styles.Text}>
                                Cette méthode revient à chercher le point a (minimum) tel que la tangente en J sera horizontale (pente nulle).
                            </NewText>
                        </View>

                        <View style={styles.flexRow}>
                            <Puce />
                            <NewText style={styles.Text}>
                                Mais cette méthode nous pose un soucis, elle nécessite une inversion de matrice, ce qui peut devenir très lourd si le dataset contient beaucoup de données.
                            </NewText>
                        </View>
                    </View>

                    <View style={styles.part}>
                        <Text style={styles.partTitle}>Descente de Gradient</Text>

                        <View style={styles.flexRow}>
                            <Puce />
                            <NewText style={styles.bold}>
                                Algorithme d'optimisation qui converge vers le minimum d'une fonction convexe.
                            </NewText>
                        </View>

                        <View style={styles.flexRow}>
                            <Puce />
                            <NewText>
                                Algorithme itératif: on prend un point random et on calcule la dérivée (dJ/da) et on va dans la direction de la pente négative.
                            </NewText>
                        </View>

                        <View style={styles.flexRow}>
                            <Puce />
                            <NewText>
                                Convergence vers le point a (minimum) optimal !
                            </NewText>
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
        marginBottom: 10,
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
})