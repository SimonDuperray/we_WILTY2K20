import { createStackNavigator } from 'react-navigation-stack';
import APPRENFPY from '../screens/apprenfpy';
import Header from '../shared/header';
import React from 'react';

const screens = {
    APPRENFPY: {
        screen: APPRENFPY,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            }
        }
    }
}

const APPRENFPYStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#ABB2B9' }
    }
});

export default APPRENFPYStack;