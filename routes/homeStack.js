import { createStackNavigator } from 'react-navigation-stack';
import Info from '../screens/info';
import ReviewInfo from '../screens/reviewInfo';
import Home from '../screens/home';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            }
        }
    },
    Info: {
        screen: Info,
        navigationOptions: {
            title: 'Informatique -> Formations',
        }
    },
    ReviewInfo: {
        screen: ReviewInfo,
        navigationOptions: {
            title: 'Informatique -> Articles',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#ABB2B9' }
    }
});

// export default createAppContainer(HomeStack);
export default HomeStack;