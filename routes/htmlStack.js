import { createStackNavigator } from 'react-navigation-stack';
import HTML from '../screens/html';
import Header from '../shared/header';
import React from 'react';

const screens = {
    HTML: {
        screen: HTML,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            }
        }
    }
}

const HTMLStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#fff' }
    }
});

export default HTMLStack;