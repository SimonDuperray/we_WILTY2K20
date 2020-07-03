import { createStackNavigator } from 'react-navigation-stack';
import JSVANILLA from '../screens/jsVanilla';
import Header from '../shared/header';
import React from 'react';

const screens = {
    JSVANILLA: {
        screen: JSVANILLA,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            }
        }
    }
}

const JSVANILLAStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#fff' }
    }
});

export default JSVANILLAStack;