import { createStackNavigator } from 'react-navigation-stack';
import Elec from '../screens/elecScreen';

import homeScreen from '../screens/homeScreen';
import infoScreen from '../screens/infoScreen';
import Home from '../screens/homeScreen';

const screens = {
    Elec: {
        screen: Elec,
        navigationOptions: {
            title: 'Elec',
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#AEB6BF', height: 70 }
    }
});

export default AboutStack;