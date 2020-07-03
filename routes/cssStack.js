import { createStackNavigator } from 'react-navigation-stack';
import CSS from '../screens/css';
import Header from '../shared/header';
import React from 'react';

const screens = {
    CSS: {
        screen: CSS,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            }
        }
    }
}

const CSSStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#fff' }
    }
});

export default CSSStack;