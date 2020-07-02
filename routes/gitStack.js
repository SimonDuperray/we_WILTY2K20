import { createStackNavigator } from 'react-navigation-stack';
import GIT from '../screens/git';
import Header from '../shared/header';
import React from 'react';

const screens = {
    GIT: {
        screen: GIT,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            }
        }
    }
}

const GITStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#fff' }
    }
});

export default GITStack;