import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import InfoStack from './infoStack';
import HomeStack from './homeStack';

const RootDrawerNavigator = createDrawerNavigator({
    Accueil: {
        screen: HomeStack,
    },
    Informatique: {
        screen: InfoStack,
    }
});

export default createAppContainer(RootDrawerNavigator);