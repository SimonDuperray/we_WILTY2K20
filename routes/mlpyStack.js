import { createStackNavigator } from 'react-navigation-stack';
import MLPY from '../screens/mlpy';
import Header from '../shared/header';
import React from 'react';

const screens = {
    MLPY: {
        screen: MLPY,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            }
        }
    }
}

const MLPYStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#fff' }
    }
});

export default MLPYStack;