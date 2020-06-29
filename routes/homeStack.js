import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Info from '../screens/info';
import ReviewInfo from '../screens/reviewInfo';

const screens = {
    Info: {
        screen: Info
    },
    ReviewInfo: {
        screen: ReviewInfo
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);