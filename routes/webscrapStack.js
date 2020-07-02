import { createStackNavigator } from 'react-navigation-stack';
import WEBSCRAP from '../screens/webscrap';
import Header from '../shared/header';
import React from 'react';

const screens = {
    WEBSCRAP: {
        screen: WEBSCRAP,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            }
        }
    }
}

const WEBSCRAPStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#fff' }
    }
});

export default WEBSCRAPStack;