import { createStackNavigator } from 'react-navigation-stack';
import Info from '../screens/info';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Info: {
        screen: Info,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            }
        }
        // navigationOptions: {
        //     headerTitle: () => <Header />
        // }
    }
}

const InfoStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#ABB2B9' }
    }
});

export default InfoStack;