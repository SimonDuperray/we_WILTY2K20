import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { globalStyles } from '../styles/global';
import { globalReviews } from '../styles/globalReview';
import { Puce } from '../components/puceList';
import { NewText } from '../components/newText';
import { RowView } from '../components/rowView';
import { LinkedSymb } from '../components/linkedText';

export default function WEBSCRAP() {
    return (
        <ScrollView>
            <View style={globalStyles.container}>
                
                {/* CHAPITRE API's SCRAPING */}

                <View style={globalReviews.chapitre}>
                    <Text style={globalReviews.titleText}>
                        API's Scraping
                    </Text>

                    <View style={globalReviews.part}>

                        {/* INTRODUCTION API ET REQUETE GET */}

                        <Text style={globalReviews.partTitle}>
                            Introduction API et Requête GET
                        </Text>

                        <RowView>
                            <Puce />
                            <NewText>
                                API: Application Program Interface
                            </NewText>
                        </RowView>

                        <RowView>
                            <Puce />
                            <NewText>
                                C'est un ensemble d'outils et de méthodes qui autorisent différentes applications à interragir entre elles -> récupérer de la data dynamiquement
                            </NewText>
                        </RowView>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                import requests
                            </Text>
                            <Text style={globalReviews.description}>
                                Chargement de la librairie requests
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                response = requests.get('url')
                            </Text>
                            <Text style={globalReviews.description}>
                                Requête GET pour obtenir des informations depuis l'API. On ajoute après l'adresse de l'API un point d'accès (ou endpoint) qui donne accès à des informations.
                            </Text>
                        </View>

                    </View>

                    <View style={globalReviews.part}>

                        {/* CODES STATUS */}

                        <Text style={globalReviews.partTitle}>
                            Les Codes Status
                        </Text>

                        <RowView>
                            <Puce />
                            <NewText>
                                Pour obtenir le code status: 'response' dans une cellule de code (ou dans un message d'erreur s'il y a un problème).
                            </NewText>
                        </RowView>

                        <RowView>
                            <Puce />
                            <NewText>
                                Les codes qui commencent par 2 sont OK.
                            </NewText>
                        </RowView>

                        <RowView>
                            <Puce />
                            <NewText>
                                Les codes qui commencent par 4 indiquent un problème quelque part.
                            </NewText>
                        </RowView>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                200
                            </Text>
                            <Text style={globalReviews.description}>
                                Tout va bien, le serveur retourne le résultat.
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                201
                            </Text>
                            <Text style={globalReviews.description}>
                                La requête POST s'est bien déroulée.
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                301
                            </Text>
                            <Text style={globalReviews.description}>
                               Le serveur redirige vers un autre paramètre.
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                400
                            </Text>
                            <Text style={globalReviews.description}>
                               Mauvaise requête (vérifier l'existence du chemin d'accès).
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                401
                            </Text>
                            <Text style={globalReviews.description}>
                               Le serveur pense que nous ne sommes pas authentifié.
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                403
                            </Text>
                            <Text style={globalReviews.description}>
                               Nous ne sommes pas autorisé à accéder à l'API.
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                404
                            </Text>
                            <Text style={globalReviews.description}>
                               Le serveur n'a pas trouvé la ressource (souvent lié au point d'accès).
                            </Text>
                        </View>

                    </View>

                    <View style={globalReviews.part}>

                        {/* PARAMETRES DE REQUETE */}

                        <Text style={globalReviews.partTitle}>
                            Les Paramètres de Requête
                        </Text>

                        <RowView>
                            <Puce />
                            <NewText>
                                Prenons l'exemple de l'API open-notify de l'ISS. Nous voulons savoir quand passera l'ISS au dessus de la ville de Paris.
                            </NewText>
                        </RowView>

                        <RowView>
                            <Puce />
                            <NewText>
                                Il y a deux méthodes principales de passer des paramètres dans la requête:
                            </NewText>
                        </RowView>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                http://api.open-notify.org/iss-pass.json?lat=48.87&lon=2.33
                            </Text>
                            <Text style={globalReviews.description}>
                               Passer les paramètres et leurs valeurs directement dans l'URL.
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                response = requests.get("http://api.open-notify.org/iss-pass.json", params=parameters)
                            </Text>
                            <Text style={globalReviews.description}>
                               Rentrer les paramètres et les valeurs dans un dictinonaire et donner le dictionnaire à l'attribut params de la méthode get.
                            </Text>
                        </View>
                    </View>

                    <View style={globalReviews.part}>

                        {/* PARAMETRES DE REQUETE */}

                        <Text style={globalReviews.partTitle}>
                            Format JSON
                        </Text>

                        <RowView>
                            <Puce />
                            <NewText>
                                JSON est le format principal pour envoyer et recevoir de la data lorsque l'on passe par une API.
                            </NewText>
                        </RowView>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                import json
                            </Text>
                            <Text style={globalReviews.description}>
                               Chargement de la librairie JSON.
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                x = json.dumps(y)
                            </Text>
                            <Text style={globalReviews.description}>
                               Prend en entrée un objet Python et retourne une chaine de caractères.
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                x = json.loads(y)
                            </Text>
                            <Text style={globalReviews.description}>
                               Prend en entrée une chaine de caractères JSON et retourne un objet Python (listes, dictionnaires).
                            </Text>
                        </View>
                    </View>

                    <View style={globalReviews.part}>

                        {/* Obtenir un JSON depuis une requête */}

                        <Text style={globalReviews.partTitle}>
                            Obtenir un JSON depuis une requête 
                        </Text>

                        <RowView>
                            <Puce />
                            <NewText>
                                Utilisation de la méthode json()
                            </NewText>
                        </RowView>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                json_data = response.json()
                            </Text>
                            <Text style={globalReviews.description}>
                               Obtenir un objet Python.
                            </Text>
                        </View>

                    </View>

                    <View style={globalReviews.part}>

                        {/* Types de contenu */}

                        <Text style={globalReviews.partTitle}>
                            Types de contenu
                        </Text>

                        <RowView>
                            <Puce />
                            <NewText>
                                La méthode GET génère également des metadatas (telles que la mode de génération de la donnée, ou comment la décoder)
                            </NewText>
                        </RowView>

                        <RowView>
                            <Puce />
                            <NewText>
                                On accède à ces données via la proprité headers (qui retourne un dictionnaire)
                            </NewText>
                        </RowView>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                print(response.headers)
                            </Text>
                            <Text style={globalReviews.description}>
                               Retourne un dictionnaire (important key: 'Content Type').
                            </Text>

                        </View>

                    </View>

                    <RowView>
                            <LinkedSymb />
                            <Text
                                style={globalReviews.linkedText}
                                onPress={() => {
                                    Linking.openURL('https://github.com/Kartodix/WEBSCRAPINGPY/tree/master/S1%20APIs%20Scrapping');
                                }}
                            >
                                Voir le repository.
                            </Text>
                    </RowView>
                        
                </View>

                {/* CHAPITRE AUTHENTIFIACATION API */}

                <View style={globalReviews.chapitre}>
                    <Text style={globalReviews.titleText}>
                        Authentification à une API
                    </Text>

                    <View style={globalReviews.part}>

                        {/* Authentification à l'API de GitHub */}

                        <Text style={globalReviews.partTitle}>
                            Authentification à l'API de GitHub
                        </Text>

                        <RowView>
                            <Puce />
                            <NewText>
                                Génération d'un TOKEN pour l'authentification. {'{'} and {'}'}
                            </NewText>
                        </RowView>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                headers={'{'}"Authorization": "token currentToken"{'}'}
                            </Text>
                            <Text style={globalReviews.description}>
                               Création d'un dictionnaire contenant le token.
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                response = requests.get('http://api.github.com/users/Kartodix', headers=headers)
                            </Text>
                            <Text style={globalReviews.description}>
                               Requête GET.
                            </Text>
                        </View>

                    </View>

                    <View style={globalReviews.part}>

                        {/* Points d'accès ou endpoints */}

                        <Text style={globalReviews.partTitle}>
                            Points d'accès ou endpoints
                        </Text>

                        <RowView>
                            <Puce />
                            <NewText>
                                On peut se conencter à d'autres comptes. Mettre un nouveau pseudo à la place de Kartodix.
                            </NewText>
                        </RowView>

                        <RowView>
                            <Puce />
                            <NewText>
                                On peut également se connecter à une organisation GitHub.
                            </NewText>
                        </RowView>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                requests.get('https://api.github.com/orgs/facebook', headers=headers)
                            </Text>
                            <Text style={globalReviews.description}>
                               Connexion à une organisation.
                            </Text>
                        </View>

                    </View>

                    <View style={globalReviews.part}>

                        {/* Pagination */}

                        <Text style={globalReviews.partTitle}>
                            Pagination
                        </Text>

                        <RowView>
                            <Puce />
                            <NewText>
                                Cela permet au scraper de choisir combien d'élément par page il veut récupérer. Ca peut éviter des bugs, ou un temps très grand.
                            </NewText>
                        </RowView>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                params={'{'}"per_pages": 50, "page": 1{'}'}
                            </Text>
                            <Text style={globalReviews.description}>
                               Paramétrer la pagination. Attention: Certaines APIs peuvent limiter la valeur de per_pages.
                            </Text>
                        </View>

                    </View>

                    <View style={globalReviews.part}>

                        {/* Point d'accès User-Level */}

                        <Text style={globalReviews.partTitle}>
                            Point d'accès User-Level
                        </Text>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                requests.get('https://api.github.com/user', headers=headers)
                            </Text>
                            <Text style={globalReviews.description}>
                               Obtenir des informations sur l'utilisateur connecté.
                            </Text>
                        </View>

                    </View>

                    <View style={globalReviews.part}>

                        {/* Requête POST */}

                        <Text style={globalReviews.partTitle}>
                            Requête POST
                        </Text>

                        <RowView>
                            <Puce />
                            <NewText>
                                Le but de la requête POST est d'envoyer de l'information, de créer un objet sur le serveur API. Donc on peut l'utiliser sur GitHub pour créer un repository par exemple.
                            </NewText>
                        </RowView>

                        <RowView>
                            <Puce />
                            <NewText>
                                Chaque API est libre ou non d'accepter la requête POST.
                            </NewText>
                        </RowView>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                payload={'{'}"name": "new-repo"{'}'}
                            </Text>
                            <Text style={globalReviews.description}>
                               Création d'un dictionnaire avec le nom du nouveau repository.
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                requests.get('https://api.github.com/user/repos', json=payload, headers=headers)
                            </Text>
                            <Text style={globalReviews.description}>
                               Création du nouveau repository.
                            </Text>
                        </View>

                        <RowView>
                            <Puce />
                            <NewText>
                                Le code status doit être 201.
                            </NewText>
                        </RowView>

                    </View>

                    <View style={globalReviews.part}>

                        {/* Requête PATCH/PUT */}

                        <Text style={globalReviews.partTitle}>
                            Requête PATCH / PUT
                        </Text>

                        <RowView>
                            <Puce />
                            <NewText>
                                On utilise la requête PATCH lorsque l'on souhaite changer quelques attributs d'un objet. Par exemple si l'on souhaite changer le nom ou la description d'un repository
                            </NewText>
                        </RowView>

                        <RowView>
                            <Puce />
                            <NewText>
                                On utilise la requête PUT pour remplacer totalement l'objet.
                            </NewText>
                        </RowView>

                        <RowView>
                            <Puce />
                            <NewText>
                                Encore une fois certaines APIs peuvent les refuser.
                            </NewText>
                        </RowView>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                payload={'{'}"name": "new-repo", "description": "super formation"{'}'}
                            </Text>
                            <Text style={globalReviews.description}>
                               Ajout de l'attribut "description".
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                requests.get('https://api.github.com/repos/Kartodix/new-repo', json=payload, headers=headers)
                            </Text>
                            <Text style={globalReviews.description}>
                               Création du nouveau repository.
                            </Text>
                        </View>

                    </View>

                    <View style={globalReviews.part}>

                        {/* Requête DELETE */}

                        <Text style={globalReviews.partTitle}>
                            Requête DELETE
                        </Text>

                        <RowView>
                            <Puce />
                            <NewText>
                                On utilise la requête DELETE pour supprimer un objet du serveur.
                            </NewText>
                        </RowView>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                requests.delete('https://api.github.com/repos/Kartodix/new-repo', headers=headers)
                            </Text>
                            <Text style={globalReviews.description}>
                               Suppression du nouveau repository.
                            </Text>
                        </View>

                    </View>

                    <RowView>
                            <LinkedSymb />
                            <Text
                                style={globalReviews.linkedText}
                                onPress={() => {
                                    Linking.openURL('https://github.com/Kartodix/WEBSCRAPINGPY/tree/master/S2%20AUTHENTIFICATION');
                                }}
                            >
                                Voir le repository.
                            </Text>
                    </RowView>

                </View>

                {/* CHAPITRE AUTHENTIFIACATION API */}

                <View style={globalReviews.chapitre}>
                    <Text style={globalReviews.titleText}>
                        Web Scraping
                    </Text>

                    <View style={globalReviews.part}>

                        {/* Introduction au Web Scraping */}

                        <Text style={globalReviews.partTitle}>
                            Introduction au Web Scraping
                        </Text>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                response = requests.get(url)
                            </Text>
                            <Text style={globalReviews.description}>
                               Récupération de l'url du site à scraper.
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                content = response.content
                            </Text>
                            <Text style={globalReviews.description}>
                               Récupération du contenu du site (code HTML).
                            </Text>
                        </View>

                    </View>

                    <View style={globalReviews.part}>

                        {/* Récupérer des éléments d'une page */}

                        <Text style={globalReviews.partTitle}>
                            Récupérer des éléments d'une page
                        </Text>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                from bs4 import BeautifulSoup
                            </Text>
                            <Text style={globalReviews.description}>
                                Chargement de la librairie.
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                content = response.content
                            </Text>
                            <Text style={globalReviews.description}>
                               Récupération du contenu du site (code HTML).
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                parser = BeautifulSoup(content, 'hml.parser')
                            </Text>
                            <Text style={globalReviews.description}>
                               On applique BeautifulSoup pour analyser le contenu précédemment téléchargé.
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                body = parser.body
                            </Text>
                            <Text style={globalReviews.description}>
                               Obtenir le tag body du document HTML.
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                p = body.p
                            </Text>
                            <Text style={globalReviews.description}>
                               Obtenir le tag p du body.
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                p.text
                            </Text>
                            <Text style={globalReviews.description}>
                               Afficher le tag p sans les balises.
                            </Text>
                        </View>

                    </View>

                    <View style={globalReviews.part}>

                        {/* Utiliser FindAll */}

                        <Text style={globalReviews.partTitle}>
                            Utiliser FindAll
                        </Text>

                        <RowView>
                            <Puce />
                            <NewText>
                                La méthode Find All va retourner une liste avec tous les éléments qui correspondent à une balise.
                            </NewText>
                        </RowView>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                p = body[0].find_all("p")
                            </Text>
                            <Text style={globalReviews.description}>
                                Récupération des éléments de la balise p dans la liste body.
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                print(p[0].text)
                            </Text>
                            <Text style={globalReviews.description}>
                                Obtenir le texte.
                            </Text>
                        </View>

                    </View>

                    <View style={globalReviews.part}>

                        {/* Élements correspondant aux IDs */}

                        <Text style={globalReviews.partTitle}>
                            Élements correspondant aux IDs
                        </Text>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                first_p = parser.find_all("p", id="first")[0]
                            </Text>
                            <Text style={globalReviews.description}>
                                Récupération de l'ID souhaité.
                            </Text>
                        </View>

                    </View>

                    <View style={globalReviews.part}>

                        {/* Les classes */}

                        <Text style={globalReviews.partTitle}>
                            Les classes
                        </Text>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                first_class_p = parser.find_all("p", class_="class1")[0]
                            </Text>
                            <Text style={globalReviews.description}>
                                Récupération de l'ID souhaité.
                            </Text>
                        </View>

                    </View>

                    <View style={globalReviews.part}>

                        {/* Selecteurs CSS */}

                        <Text style={globalReviews.partTitle}>
                            Sélecteurs CSS
                        </Text>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                first_items = parser.select(".first-item")
                            </Text>
                            <Text style={globalReviews.description}>
                                Récupération de tous les éléments ayant la classe first-item.
                            </Text>
                        </View>

                    </View>

                    <View style={globalReviews.part}>

                        {/* Association de sélecteurs en CSS */}

                        <Text style={globalReviews.partTitle}>
                            Association de sélecteurs en CSS
                        </Text>

                        <RowView>
                            <Puce />
                            <NewText>
                                Exemple: Statistiques Match de Foot entre le psg et Chelsea.
                            </NewText>
                        </RowView>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                offences = parser.select('#fautes')[0]
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                chelsea_offences = offences.select("td")[1]
                            </Text>
                        </View>

                        <View style={globalReviews.newCommand}>
                            <Text style={globalReviews.command}>
                                chelsea_offences_count = chelsea_offences.text
                            </Text>
                            <Text style={globalReviews.description}>
                                Trouver le nombre de fautes de Chelsea.
                            </Text>
                        </View>

                    </View>

                    <RowView>
                            <LinkedSymb />
                            <Text
                                style={globalReviews.linkedText}
                                onPress={() => {
                                    Linking.openURL('https://github.com/Kartodix/WEBSCRAPINGPY/tree/master/S4%20WEB%20SCRAPPING');
                                }}
                            >
                                Voir le repository.
                            </Text>
                    </RowView>

                </View>

                {/* CHAPITRE PROJETS */}

                <View style={globalReviews.chapitre}>
                    <Text style={globalReviews.titleText}>
                        Projets Web Scraping
                    </Text>

                    <View style={globalReviews.part}>

                        {/* Projet API Reddit */}

                        <Text style={globalReviews.partTitle}>
                            Cas Pratique: API Reddit
                        </Text>

                        <RowView>
                            <LinkedSymb />
                            <Text
                                style={globalReviews.linkedText}
                                onPress={() => {
                                    Linking.openURL('https://github.com/Kartodix/WEBSCRAPINGPY/tree/master/S3%20CAS%20PRATIQUE%20REDDIT');
                            }}>
                            Voir le repository</Text>
                        </RowView>

                    </View>

                    <View style={globalReviews.part}>

                        {/* Projet Site Meteo */}

                        <Text style={globalReviews.partTitle}>
                            Site Météo
                        </Text>

                        <RowView>
                            <LinkedSymb />
                            <Text
                                style={globalReviews.linkedText}
                                onPress={() => {
                                    Linking.openURL('https://github.com/Kartodix/WEBSCRAPINGPY/tree/master/S5%20CHALLENGE%201%20METEO');
                            }}>
                            Voir le repository</Text>
                        </RowView>

                    </View>

                    <View style={globalReviews.part}>

                        {/* Critique de films */}

                        <Text style={globalReviews.partTitle}>
                            Critique de films
                        </Text>

                        <RowView>
                            <LinkedSymb />
                            <Text
                                style={globalReviews.linkedText}
                                onPress={() => {
                                    Linking.openURL('https://github.com/Kartodix/WEBSCRAPINGPY/tree/master/S6%20CHALLENGE%202%20FILMS');
                            }}>
                            Voir le repository</Text>
                        </RowView>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}