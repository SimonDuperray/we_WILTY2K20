import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Info({ navigation }) {

    // const pressHandler = () => {
    //     navigation.navigate('ReviewInfo')
    // }

    const [notions, setNotions] = useState([
        {title: 'Machine Learning Python', body: 'Formation sur le machine learning et les datasciences en python', key: '1'},
        {title: 'Apprentissage par renforcement Python', body: 'Les différents algorithmes d\'apprentissage par renforcement en Python', key: '2'},
        {title: 'Web Scraping Python', body: 'Comment récupérer des données via des sites internet ou des apis en python ?', key: '3'},
        {title: 'Développement Web', body: 'Formation développeur FullStack', key: '4'},
        {title: 'Java', body: 'Découvrir et s\'amuser avec java', key: '5'}
    ]);

    return (
        <View style={styles.container}>
            <Text>Info Screen</Text>
            <FlatList
                data={notions}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewInfo', item)}>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </TouchableOpacity>
                )} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})