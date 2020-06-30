import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { globalReviews } from '../styles/globalReviews';

export default function Info({ navigation }) {

    const [notions, setNotions] = useState([
        {title: 'Machine Learning Python', body: 'Formation sur le machine learning et les datasciences en python', key: '1'},
        {title: 'Apprentissage par renforcement Python', body: 'Les différents algorithmes d\'apprentissage par renforcement en Python', key: '2'},
        {title: 'Web Scraping Python', body: 'Comment récupérer des données via des sites internet ou des apis en python ?', key: '3'},
        {title: 'Développement Web', body: 'Formation développeur FullStack', key: '4'},
        {title: 'VueJS', body: 'framework javascript', key:'6'},
        {title: 'React Native', body: 'Faire des application mobiles facilement', key: '7'},
        {title: 'Git', body: <Text style={globalStyles.titleText}>Git est un gestionnaire de projet</Text>, key: '8'}
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                data={notions}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.list}onPress={() => navigation.navigate('ReviewInfo', item)}>
                        <Text style={styles.items}>{ item.title }</Text>
                    </TouchableOpacity>
                )} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        marginTop: 15,
        marginBottom: 15,
    },
    items: {
        marginRight: 15,
        marginLeft: 15,
        width: 'auto',
        height: 100,
        backgroundColor: '#03A9F4',
        borderRadius: 5,
        textAlign: 'center',
        alignItems: 'center',
        color: '#CFD8DC',
        fontFamily: 'museo-moderno-extrabold',
        fontSize: 18,
        padding: 15,
        textAlignVertical: 'center',
        textTransform: 'uppercase'
    },
    test: {
        color: 'red'
    }
})