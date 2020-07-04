import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { globalReviews } from '../styles/globalReview';
import { Toggler } from '../components/toggler';
import { RowViewLink } from '../components/rowViewLink';
import { LinkedSymb } from '../components/linkedText';

export default function CSS() {
    return (
        <ScrollView>

            <View style={globalReviews.container}>

                {/* ===SOMMAIRE=== */}

                <View style={globalReviews.summary}>

                    <Text style={globalReviews.titleSummary}>
                        Sommaire:
                    </Text>
                    <Text style={globalReviews.firstStage}>
                        1. FlexBox
                    </Text>
                    <Text style={globalReviews.secondStage}>
                        1.1 Flex Containers
                    </Text>
                    <Text style={globalReviews.secondStage}>
                        1.2 Commande & Orientation
                    </Text>
                    <Text style={globalReviews.secondStage}>
                        1.3 Alignement
                    </Text>
                    <Text style={globalReviews.secondStage}>
                        1.4 Flexibilité
                    </Text>

                </View>

                {/* ===FIN SOMMAIRE=== */}

                {/* ===FLEX BOX=== */}

                <View style={globalReviews.commandContainer}>

                    <Text style={globalReviews.titleText}>
                        FlexBox
                    </Text>

                    <RowViewLink>
                            <LinkedSymb />
                            <Text
                                style={globalReviews.linkedText}
                                onPress={() => {
                                    Linking.openURL('https://yoksel.github.io/flex-cheatsheet/#section-declaring');
                                }}
                            >
                                Cheat Sheet Flex
                            </Text>
                    </RowViewLink>

                    <View style={globalReviews.part}>

                        <Text style={globalReviews.partTitle}>
                            Flex Containers
                        </Text>

                        <Toggler command={'display'} description={'flex: Cette valeur oblige un élément à générer une boîte de conteneur flexible au niveau du bloc lorsqu\'il est placé dans la disposition de flex.\n\ninline-flex: Cette valeur fit qu\'un élément génère une boîte de conteneur flexible de niveau en ligne lorsqu\'il est placé dans la disposition de flux'}/>

                    </View>

                    <View style={globalReviews.part}>

                        <Text style={globalReviews.partTitle}>
                            Commande & Orientation
                        </Text>

                        <Toggler command={'flex-direction'} description={'row: l\'axe principal du conteneur flexible a la même orientation que l\'axe en ligne du mode écriture en cours. Les directions de début principal et de fin principals sont équivalentes aux directions de début et ligne et de fin en ligne, respectivement du mode d\'écriture actuel.\n\nrow-reverse: Identique a row, sauf que les directions de début principal et de fin principale sont inversées.\n\ncolumn: L\'axe principal du conteneur flexible a la même orientation que l\'axe de bloc du mode d\'écriture en cours. Les directions de début et de fin principale sont équivalentes aux directions de début et de fin de bloc respectivement, du mode d\'écriture actuel.\n\ncolumn-reverse: Identique à la colonne, safuq eu les directions de début et de fin principale sont inversées.'}/>
                        <Toggler command={'flex-wrap'} description={'nowrap: Le conteneur flexible est à une seule ligne.\n\nwrap: Le conteneur flexible est multi-lignes.\n\nwrap-reverse: Identique au wrap mais à l\'envers.'}/>
                        <Toggler command={'flex-flow'} description={'row nowrap: desc\n\ncolumn-reverse: desc\n\ncolumn-wrap: desc\n\nrow-reverse-wrap-reverse: desc'}/>
                        <Toggler command={'order'} description={'Pour inverser l\'ordre de la rangée ou de la colonne d\'un élément individuel: -1 / 0 / 1'}/>

                    </View>

                    <View style={globalReviews.part}>

                        <Text style={globalReviews.partTitle}>
                            Alignement
                        </Text>

                        <Toggler command={'justify-content'} description={'flex-start: Stack les éléments horizontalement de gauche à droite.\n\nflex-end: Pareil que flex-start mais de droite à gauche.\n\ncenter: Place les éléments au milieu de l\'écran.\n\nspace-between: Répartis les éléments horizontalement de façon équidistantes.\n\nspace-around: Pareil que space-between mais avec une marge à gauche et à droite.\n\nspace-evenly: Pareil que space-around mais avec des marges plus grandes.'}/>
                        <Toggler command={'align-items/align-self'} description={'auto: Diffère le contrôle d\'alignement transversal à la valeur d\'alignement éléments sur la boîte parent.\n\nflex-start: Le bord de la marge de départ croisé de l\'élément flexible est placé au ras du bord de départ croisé de la ligne.\n\nflex-end: Le bord de la marge transversale de l\'élément flexible est placé au ras du bord transversal de la ligne\n\ncenter: La zone de marge de l\'élément flexible est centrée sur l\'axe transversal de la ligne.\n\nbaseline: L\'élément flexible participe à l\'alignement de la ligne de base: tous les éléments flexibles participants sur la ligne sont alignés de telle sorte que leurs lignes de base s\'alignent, et l\'élément avec la plus grande distance entre sa ligne de base et son bord de marge de départ croisé est placé au ras du bord de départ croisé de la ligne. Si l\'élément n\'a pas de ligne de base dans l\'axe nécessaire, alors une est synthétisée à partir de la zone de bordure de l\'élément flexible.\n\nstretch: Si la propriété de taille croisée de l\'élément flexible est calculée sur auto et qu\'aucune des marges transversales n\'est automatique, l\'élément flexible est étiré. Sa valeur utilisée est la longueur nécessaire pour que la taille de la croix de la zone de marge de l\'article soit aussi proche que possible de la ligne, tout en respectant les contraintes imposées par min-hauteur / min-largeur / max-hauteur / max- largeur.'}/>
                        <Toggler command={'align-content'} description={'flex-start: Stack les éléments en haut à gauche.\n\nflex-end: Stack les éléments en bas à gauche.\n\ncenter: Stack les éléments au milieu verticalement mais collés à gauche.\n\nspace-between: Stack les éléments du haut en haut et ceux du bas en bas, tout cela collé à gauche.\n\nspace-around: Stack les éléments du haut en haut et ceux du bas en bas, tout cela collé à gauche, avec une marge entre les éléments.\n\nstretch: Remplis l\'espace vertical avec les éléments, tout cela colle à gauche'}/>

                    </View>

                    <View style={globalReviews.part}>

                        <Text style={globalReviews.partTitle}>
                            Flexibilité
                        </Text>

                        <Toggler command={'flex-grow'} description={'La propriété flex-grow définit le facteur de croissance flex sur le <numéro> fourni. Les nombres négatifs ne sont pas valides: 0 / 1.'}/>
                        <Toggler command={'flex-shrink'} description={'La propriété flex-shrink définit le facteur de rétrécissement flex sur le <numéro> fourni. Les nombres négatifs ne sont pas valides: 0 : 1.'}/>
                        <Toggler command={'flex-basis'} description={'La propriété flex-basis définit la base flex. Il accepte les mêmes valeurs que la propriété width et height, plus le contenu: 30% / 50% / content / auto.'}/>
                        <Toggler command={'flex'} description={'La propriété flex spécifie les composants d\'une longueur flexible: les facteurs de flexion (croissance et rétrécissement) et la base de flexion. Lorsqu\'une boîte est un élément flexible, flex est consulté au lieu de la propriété size principale pour déterminer la taille principale de la boîte. Si une boîte n\'est pas un élément flexible, flex n\'a aucun effet: 0 / 1 / auto.'}/>

                    </View>

                </View>

                {/* ===FIN FLEX BOX=== */}

            </View>

        </ScrollView>
    )
}