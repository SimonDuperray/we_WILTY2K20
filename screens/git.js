import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { globalReviews } from '../styles/globalReview';
import { Toggler } from '../components/toggler';

export default function GIT() {

    return (
        <ScrollView>

            <View style={globalReviews.container}>

                <View style={globalReviews.summary}>

                    <Text style={globalReviews.titleSummary}>
                        Sommaire:
                    </Text>
                    <Text style={globalReviews.firstStage}>
                        1. Commandes Git
                    </Text>
                    <Text style={globalReviews.firstStage}>
                        2. Git Branch
                    </Text>
                    <Text style={globalReviews.firstStage}>
                        3. Remisage
                    </Text>
                    <Text style={globalReviews.firstStage}>
                        4. Push on GitHub
                    </Text>

                </View>

                <View style={globalReviews.commandContainer}>

                    <Text style={globalReviews.titleText}>
                        Commandes Git
                    </Text>

                    <Toggler command={'git status '} description={'Afficher le status des fichiers qui constituent le dossier parent du projet.'}/>
                    <Toggler command={'git add * '} description={'Stager les fichiers courants.'}/>

                    <Toggler command={'git status '} description={'Afficher le status des fichiers qui constituent le dossier parent du projet.'}/>
                    <Toggler command={'git add * '} description={'Stager les fichiers courants.'}/>

                    <Toggler command={'git commit -m "" '} description={'Commit les changements effectués.'}/>
                    <Toggler command={'git reset '} description={'Supprimer le staging courant.'}/>

                    <Toggler command={'git reset --hard '} description={'Supprime tous les fichiers modifiés pour revenir au commit précédent.'}/>
                    <Toggler command={'git reset HEAD^ --soft '} description={'Retour en arrière et met en staging les modifications.'}/>

                    <Toggler command={'git reset HEAD^ --mixed '} description={'Retour en arrière et commente les modifications (ne les stage pas).'}/>
                    <Toggler command={'git checkout sha1 '} description={'Observer l\'ancien commit sans pouvoir le modifier.'}/>

                    <Toggler command={'git checkout sha1 file '} description={'Retour de l\'état du fichier au dit commit et possibilité de stage et de commit.'}/>
                    <Toggler command={'git revert '} description={'Défaire un commit.'}/>

                    <Toggler command={'git revert file '} description={'Enlever les modifications du fichier / Cela ne modifie pas l\'historique, un nouveau commit "Revert commit" est créé.'}/>
                    <Toggler command={'git reset '} description={'Supprimer le staging courant.'}/>

                    <Toggler command={'git commit --amend '} description={'Ajouter une feature au commit.'}/>

                </View>


                <View style={globalReviews.commandContainer}>

                    <Text style={globalReviews.titleText}>
                        Git Branch
                    </Text>

                    <Toggler command={'git checkout -b newBranch '} description={'Création et alignement sur la nouvelle branche (Faire les modifications).'}/>

                    <Toggler command={'git add * '} description={'Stager les fichiers courants.'}/>

                    <Toggler command={'git commit -m "" '} description={'Commit les changements effectués.'}/>

                    <Toggler command={'git checkout master '} description={'Retour sur la branche master. Cette opération va créer des changements dans le code, ce qui est normal.'}/>

                    <Toggler command={'git merge newBranch '} description={'Ajouter la nouvelle branche à la branche master pour appliquer les modifications.'}/>

                    <Toggler command={'git branch -d newBranch '} description={'Suppresion de la branche pour ne pas encombrer l\'architecture.'}/>

                </View>

                <View style={globalReviews.commandContainer}>

                    <Text style={globalReviews.titleText}>
                        Remisage
                    </Text>

                    <Toggler command={'git stash '} description={'Garde en mémoire les dernières modifications depuis le dernier commit sans les publier.'}/>

                    <Toggler command={'git stash list '} description={'Afficher toutes les modifications stockées en mémoire.'}/>

                    <Toggler command={'git stash apply '} description={'Appliquer les modifications stockées en mémoire.'}/>

                </View>

                <View style={globalReviews.commandContainer}>

                    <Text style={globalReviews.titleText}>
                        Push on GitHub
                    </Text>

                    <Toggler command={'PréRequis '} description={'Un commit.'}/>

                    <Toggler command={'git remote add origin https://github.com/Kartodix/repoName.git :'} description={'Création d\'un remote pour push les commit sur le repository GitHub.'}/>

                    <Toggler command={'git push -u origin master :'} description={'Envoyer le commit sur GitHub.'}/>

                    <Toggler command={'git push origin master --force :'} description={'Si bug avec la commande précédente.'}/>

                </View>
            </View>
        </ScrollView>
    )
}