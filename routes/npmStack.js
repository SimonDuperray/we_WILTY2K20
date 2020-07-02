import { createStackNavigator } from 'react-navigation-stack';
import NPM from '../screens/npm';
import Header from '../shared/header';
import React from 'react';

const screens = {
    NPM: {
        screen: NPM,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            }
        }
    }
}

const NPMStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#fff' }
    }
});

export default NPMStack;