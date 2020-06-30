import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
// import InfoStack from './infoStack';
import HomeStack from './homeStack';
import MLPYStack from './mlpyStack';

const RootDrawerNavigator = createDrawerNavigator({
    Accueil: {
        screen: HomeStack,
    },
    // Informatique: {
    //     screen: InfoStack,
    // },
    MachineLearningPython: {
        screen: MLPYStack,
    }
});

export default createAppContainer(RootDrawerNavigator);