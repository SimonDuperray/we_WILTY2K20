import { createStackNavigator } from 'react-navigation-stack';
import SQL from '../screens/sql';
import Header from '../shared/header';
import React from 'react';

const screens = {
    SQL: {
        screen: SQL,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            }
        }
    }
}

const SQLStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#fff' }
    }
});

export default SQLStack;