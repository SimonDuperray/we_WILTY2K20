import { createStackNavigator } from 'react-navigation-stack';
import DEVWEB from '../screens/devweb';
import Header from '../shared/header';
import React from 'react';

const screens = {
    DEVWEB: {
        screen: DEVWEB,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            }
        }
    }
}

const DEVWEBStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#fff' }
    }
});

export default DEVWEBStack;