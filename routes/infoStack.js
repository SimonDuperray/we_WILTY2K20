import { createStackNavigator } from 'react-navigation-stack';
import Info from '../screens/info';

const screens = {
    Info: {
        screen: Info,
        navigationOptions: {
            title: 'Informatique',
            // headerStyle: { backgroundColor: '#ABB2B9' }
        }
    }
}

const InfoStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#ABB2B9' }
    }
});

export default InfoStack;