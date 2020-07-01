import React from 'react';
import { View, Text, ScrollView  } from 'react-native';
import { globalReviews } from '../styles/globalReview';

export default function GIT() {
    return (
        <ScrollView>

            <View style={globalReviews.container}>
                
                <View style={globalReviews.commandContainer}>
                    <Text style={globalReviews.titleText}>
                        Commandes Git
                    </Text>

                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git status :</Text>
                        <Text style={globalReviews.description}>Afficher le status des fichiers qui constituent le dossier parent du projet.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git add * :</Text>
                        <Text style={globalReviews.description}>Stager les fichiers courants.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git commit -m "" :</Text>
                        <Text style={globalReviews.description}>Commit les changements effectués.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git reset :</Text>
                        <Text style={globalReviews.description}>Supprimer le staging courant.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git reset --hard :</Text>
                        <Text style={globalReviews.description}>Supprime tous les fichiers modifiés pour revenir au commit précédent.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git reset sha1 :</Text>
                        <Text style={globalReviews.description}>Retour au commit voulu et met en staging toutes les modifications.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git reset HEAD^ :</Text>
                        <Text style={globalReviews.description}>Revenir un commit en arrière / autant de crans en arrière que d'accents circonflexes.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git reset HEAD^ --soft :</Text>
                        <Text style={globalReviews.description}>Retour en arrière et met en staging les modifications.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git reset HEAD^ --mixed :</Text>
                        <Text style={globalReviews.description}>Retour en arrière et commente les modifications (ne les stage pas).</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git checkout sha1 :</Text>
                        <Text style={globalReviews.description}>Observer l'ancien commit sans pouvoir le modifier.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git checkout sha1 file :</Text>
                        <Text style={globalReviews.description}>Retour de l'état du fichier au dit commit et possibilité de stage et de commit.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git revert :</Text>
                        <Text style={globalReviews.description}>Défaire un commit.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git revert file :</Text>
                        <Text style={globalReviews.description}>Enlever les modifications du fichier / Cela ne modifie pas l'historique, un nouveau commit "Revert commit" est créé.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git reset :</Text>
                        <Text style={globalReviews.description}>Supprimer le staging courant.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git commit --amend :</Text>
                        <Text style={globalReviews.description}>Ajouter une feature au commit.</Text>
                    </View>
                </View>


                <View style={globalReviews.commandContainer}>
                    <Text style={globalReviews.titleText}>
                        Git Branch
                    </Text>

                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git checkout -b newBranch :</Text>
                        <Text style={globalReviews.description}>Création et alignement sur la nouvelle branche (Faire les modifications).</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git add * :</Text>
                        <Text style={globalReviews.description}>Stager les fichiers courants.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git commit -m "" :</Text>
                        <Text style={globalReviews.description}>Commit les changements effectués.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git checkout master :</Text>
                        <Text style={globalReviews.description}>Retour sur la branche master. Cette opération va créer des changements dans le code, ce qui est normal.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git merge newBranch :</Text>
                        <Text style={globalReviews.description}>Ajouter la nouvelle branche à la branche master pour appliquer les modifications.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git branch -d newBranch :</Text>
                        <Text style={globalReviews.description}>Suppresion de la branche pour ne pas encombrer l'architecture.</Text>
                    </View>
                </View>

                <View style={globalReviews.commandContainer}>
                    <Text style={globalReviews.titleText}>
                        Remisage
                    </Text>

                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git stash :</Text>
                        <Text style={globalReviews.description}>Garde en mémoire les dernières modifications depuis le dernier commit sans les publier.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git stash list :</Text>
                        <Text style={globalReviews.description}>Afficher toutes les modifications stockées en mémoire.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git stash apply :</Text>
                        <Text style={globalReviews.description}>Appliquer les modifications stockées en mémoire.</Text>
                    </View>
                </View>

                <View style={globalReviews.commandContainer}>
                    <Text style={globalReviews.titleText}>
                        Push on GitHub
                    </Text>

                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>PréRequis :</Text>
                        <Text style={globalReviews.description}>Un commit.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git remote add origin https://github.com/Kartodix/repoName.git :</Text>
                        <Text style={globalReviews.description}>Création d'un remote pour push les commit sur le repository GitHub.</Text>
                    </View>
                    <View style={globalReviews.newCommand}>
                        <Text style={globalReviews.command}>git push -u origin master :</Text>
                        <Text style={globalReviews.description}>Envoyer le commit sur GitHub.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}