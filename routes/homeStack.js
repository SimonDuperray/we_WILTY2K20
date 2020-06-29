import { createStackNavigator } from 'react-navigation-stack';
import Info from '../screens/info';
import ReviewInfo from '../screens/reviewInfo';
import Home from '../screens/home';

const screens = {
    Home: {
        screen: Home
    },
    Info: {
        screen: Info,
        navigationOptions: {
            title: 'Informatique -> Formations',
            // headerStyle: { backgroundColor: '#ABB2B9' }
        }
    },
    ReviewInfo: {
        screen: ReviewInfo,
        navigationOptions: {
            title: 'Informatique -> Articles',
            // headerStyle: { backgroundColor: '#ABB2B9' }
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