import React from 'react';
import { View, Text, StyleSheet, ScrollView  } from 'react-native';

export default function GIT() {
    return (
        <ScrollView>

            <View style={styles.container}>
                
                <View style={styles.commandContainer}>
                    <Text style={styles.titleText}>
                        Commandes Git
                    </Text>

                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git status :</Text>
                        <Text style={styles.description}>Afficher le status des fichiers qui constituent le dossier parent du projet.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git add * :</Text>
                        <Text style={styles.description}>Stager les fichiers courants.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git commit -m "" :</Text>
                        <Text style={styles.description}>Commit les changements effectués.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git reset :</Text>
                        <Text style={styles.description}>Supprimer le staging courant.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git reset --hard :</Text>
                        <Text style={styles.description}>Supprime tous les fichiers modifiés pour revenir au commit précédent.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git reset sha1 :</Text>
                        <Text style={styles.description}>Retour au commit voulu et met en staging toutes les modifications.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git reset HEAD^ :</Text>
                        <Text style={styles.description}>Revenir un commit en arrière / autant de crans en arrière que d'accents circonflexes.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git reset HEAD^ --soft :</Text>
                        <Text style={styles.description}>Retour en arrière et met en staging les modifications.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git reset HEAD^ --mixed :</Text>
                        <Text style={styles.description}>Retour en arrière et commente les modifications (ne les stage pas).</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git checkout sha1 :</Text>
                        <Text style={styles.description}>Observer l'ancien commit sans pouvoir le modifier.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git checkout sha1 file :</Text>
                        <Text style={styles.description}>Retour de l'état du fichier au dit commit et possibilité de stage et de commit.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git revert :</Text>
                        <Text style={styles.description}>Défaire un commit.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git revert file :</Text>
                        <Text style={styles.description}>Enlever les modifications du fichier / Cela ne modifie pas l'historique, un nouveau commit "Revert commit" est créé.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git reset :</Text>
                        <Text style={styles.description}>Supprimer le staging courant.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git commit --amend :</Text>
                        <Text style={styles.description}>Ajouter une feature au commit.</Text>
                    </View>
                </View>


                <View style={styles.commandContainer}>
                    <Text style={styles.titleText}>
                        Git Branch
                    </Text>

                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git checkout -b newBranch :</Text>
                        <Text style={styles.description}>Création et alignement sur la nouvelle branche (Faire les modifications).</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git add * :</Text>
                        <Text style={styles.description}>Stager les fichiers courants.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git commit -m "" :</Text>
                        <Text style={styles.description}>Commit les changements effectués.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git checkout master :</Text>
                        <Text style={styles.description}>Retour sur la branche master. Cette opération va créer des changements dans le code, ce qui est normal.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git merge newBranch :</Text>
                        <Text style={styles.description}>Ajouter la nouvelle branche à la branche master pour appliquer les modifications.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git branch -d newBranch :</Text>
                        <Text style={styles.description}>Suppresion de la branche pour ne pas encombrer l'architecture.</Text>
                    </View>
                </View>

                <View style={styles.commandContainer}>
                    <Text style={styles.titleText}>
                        Remisage
                    </Text>

                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git stash :</Text>
                        <Text style={styles.description}>Garde en mémoire les dernières modifications depuis le dernier commit sans les publier.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git stash list :</Text>
                        <Text style={styles.description}>Afficher toutes les modifications stockées en mémoire.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git stash apply :</Text>
                        <Text style={styles.description}>Appliquer les modifications stockées en mémoire.</Text>
                    </View>
                </View>

                <View style={styles.commandContainer}>
                    <Text style={styles.titleText}>
                        Push on GitHub
                    </Text>

                    <View style={styles.newCommand}>
                        <Text style={styles.command}>PréRequis :</Text>
                        <Text style={styles.description}>Un commit.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git remote add origin https://github.com/Kartodix/repoName.git :</Text>
                        <Text style={styles.description}>Création d'un remote pour push les commit sur le repository GitHub.</Text>
                    </View>
                    <View style={styles.newCommand}>
                        <Text style={styles.command}>git push -u origin master :</Text>
                        <Text style={styles.description}>Envoyer le commit sur GitHub.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'nunito-regular',
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        borderColor: 'grey',
        borderWidth: 3,
        paddingTop: 10,
        paddingBottom: 10
    },
    container: {
        flex: 1,
        padding: 20,
    },
    commandContainer: {
        marginRight: 0,
        marginBottom: 10,
    },
    newCommand: {
        paddingBottom: 20,
        borderBottomWidth: 1.5,
        borderBottomColor: 'grey',
        paddingBottom: 10,
        paddingTop: 10
    },
    command: {
        fontWeight: 'bold',
        marginRight: 15,
        textDecorationLine: 'underline',
    },
    description: {
        color: 'grey',
        flexWrap: 'wrap',
        flex: 1,
    }
})