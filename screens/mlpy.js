import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { globalReviews } from '../styles/globalReview';
import { Puce } from '../components/puceList';
import { NewText } from '../components/newText';
import { RowView } from '../components/rowView';

export default function MLPY() {
    return (
        <ScrollView>
            <View style={globalReviews.container}>

                {/* CHAPITRE MACHINE LEARNIA */}

                <View style={globalReviews.chapitre}>
                    <Text style={globalReviews.titleText}>
                        Machine Learnina
                    </Text>
                    <View style={globalReviews.part}>

                        {/* REGRESSION LINEAIRE FONCTIONS */}

                        <Text style={globalReviews.partTitle}>
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

                    <View style={globalReviews.part}>

                        {/* REGRESSION LINEAIRE MATRICES */}

                        <Text style={globalReviews.partTitle}>
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
                            <View style={styles.viewImage}>
                                <Text style={styles.textBeforeImage}>Dataset - Matrice X</Text>
                                <Image source={require('../assets/X.png')}/>
                            </View>
                            <View style={styles.viewImage}>
                                <Text style={styles.textBeforeImage}>Dataset - Matrice Y</Text>
                                <Image source={require('../assets/Y.png')}/>
                            </View>
                            <View style={styles.viewImage}>
                                <Text style={styles.textBeforeImage}>Dataset - Matrice θ</Text>
                                <Image source={require('../assets/theta.png')}/>
                            </View>
                        </View>
                    </View>

                    {/* PARTIE FONCTION COUT MSE */}

                    <View style={globalReviews.part}>
                        <Text style={globalReviews.partTitle}>Fonction Coût - MSE</Text>
                        <RowView>
                            <Puce />
                            <NewText style={styles.Text}>
                                La fonction coût ou Erreur Quadratique Moyenne (Mean Squarred Error) est un algorithme de minimisation.
                            </NewText>
                        </RowView>

                        <Image source={require('../assets/mse.png')}/>

                        <RowView>
                            <Puce />
                            <NewText style={styles.Text}>
                                Il y a trois méthodes principales pour trouver le minimum de la fonction étudiée :
                            </NewText>
                        </RowView>
                        
                        <RowView>
                            <Puce />
                            <Text style={styles.bold}>Moindres Carrés</Text>
                            <Text>, </Text>
                            <Text style={styles.bold}>Descente de Gradient</Text>
                            <Text> et </Text>
                        </RowView>
                        <Text style={styles.bold}>Traditional start</Text>
                    </View>

                    {/* PARTIE METHODE DES MOINDRES CARRES */}

                    <View style={globalReviews.part}>
                        <Text style={globalReviews.partTitle}>Méthode des Moindres Carrés</Text>

                        <Image source={require('../assets/mmc1.png')}/>
                        <Image source={require('../assets/mmc2.png')} />

                        <RowView>
                            <Puce />
                            <NewText>
                                où les ri(θ) sont les résidus du modèle, i.e. ri(θ) est l'écart entre la mesure yi et la prédiction f (xi ; θ) donnée par le modèle. S(θ) peut être considéré comme une mesure de la distance entre les données expérimentales et le modèle théorique qui prédit ces données. La prescription des moindres carrés commande que cette distance soit minimale.
                            </NewText>
                        </RowView>

                        <RowView>
                            <Puce />
                            <NewText>
                                Cette méthode revient à chercher le point a (minimum) tel que la tangente en J sera horizontale (pente nulle).
                            </NewText>
                        </RowView>

                        <RowView>
                            <Puce />
                            <NewText>
                                Mais cette méthode nous pose un soucis, elle nécessite une inversion de matrice, ce qui peut devenir très lourd si le dataset contient beaucoup de données.
                            </NewText>
                        </RowView>
                    </View>

                    {/* PARTIE DESCENTE DE GRADIENT */}

                    <View style={globalReviews.part}>
                        <Text style={globalReviews.partTitle}>Descente de Gradient</Text>

                        <RowView>
                            <Puce />
                            <NewText style={styles.bold}>
                                Algorithme d'optimisation qui converge vers le minimum d'une fonction convexe.
                            </NewText>
                        </RowView>

                        <Image source={require('../assets/convex.png')}/>
                        <Image source={require('../assets/noconvex.png')}/>
                        <Image source={require('../assets/minfoncou.png')}/>

                        <RowView>
                            <Puce />
                            <NewText>
                                Algorithme itératif: on prend un point random et on calcule la dérivée (dJ/da) et on va dans la direction de la pente négative.
                            </NewText>
                        </RowView>

                        <RowView>
                            <Puce />
                            <NewText>
                                Convergence vers le point a (minimum) optimal !
                            </NewText>
                        </RowView>

                        <RowView>
                            <Puce />
                            <NewText>
                                En apprentissage supervisé, la descente de Gradient permet de minimiser la fonction coût => c'est avec ça que la machine apprend.
                            </NewText>
                        </RowView>

                        <RowView>
                            <Puce />
                            <NewText>
                                Alpha / learning rate est un <Text style={styles.bold}>hyperparamètre toujours positif.</Text>
                            </NewText>
                        </RowView>

                        <Image source={require('../assets/alpha.png')}/>

                        <RowView>
                            <Puce />
                            <NewText>
                                C'est un algorithme itératif :
                            </NewText>
                        </RowView>

                        <Image source={require('../assets/algoiter.png')}/>
                        <Image source={require('../assets/gradientdescent.png')}/>

                        <RowView>
                            <Puce />
                            <NewText>
                                Si alpha est trop grand, les pas seront trop grands et on oscillera autour de l'objectif sans jamais l'atteindre.
                            </NewText>
                        </RowView>

                        <RowView>
                            <Puce />
                            <NewText>
                                Si alpha est trop petit, on risque de prendre un temps infini pour trouver le minimum de la fonction.
                            </NewText>
                        </RowView>

                        <RowView>
                            <Puce />
                            <NewText>
                                J(a, b) est une <Text style={styles.bold}>fonction composée</Text> : <Text style={styles.bold}>(gof)' = f'.g'(f)</Text>
                            </NewText>
                        </RowView>
                    </View>

                    {/* PARTIE TRADITIONAL START */}

                    <View style={globalReviews.part}>
                        <Text style={globalReviews.partTitle}>Expression de forme fermée</Text>

                        <RowView>
                            <NewText>
                                A développer
                            </NewText>
                        </RowView>
                        <Image source={require('../assets/trad.png')}/> 
                    </View>

                    {/* PARTIE COEFFICIENT DE DETERMINATION */}

                    <View style={globalReviews.part}>
                        <Text style={globalReviews.partTitle}>Coefficient de Détermination</Text>

                        <Image source={require('../assets/coefdeter.png')}/>

                        <RowView>
                            <Puce />
                            <NewText>
                                Où n est le nombre de mesures, yi la valeur de la mesure, y^i la valeur prédite correspondante et y_i la moyenne des mesures.
                            </NewText>
                        </RowView>

                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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