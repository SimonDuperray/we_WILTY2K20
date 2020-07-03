import { createStackNavigator } from 'react-navigation-stack';
import PHP from '../screens/php';
import Header from '../shared/header';
import React from 'react';

const screens = {
    PHP: {
        screen: PHP,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            }
        }
    }
}

const PHPStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#fff' }
    }
});

export default PHPStack;