import { createStackNavigator } from 'react-navigation-stack';

import homeScreen from '../screens/homeScreen';
import infoScreen from '../screens/infoScreen';
import Home from '../screens/homeScreen';

const screens = {
    Home: {
        screen: homeScreen,
        navigationOptions: {
            title: 'WILTY-Home',
        }
    },
    Info: {
        screen: infoScreen,
        navigationOptions: {
            title: 'Infos',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#AEB6BF', height: 70 }
    }
});

export default HomeStack;