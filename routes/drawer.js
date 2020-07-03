import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './homeStack';
import MLPYStack from './mlpyStack';
import APPRENFPYStack from './apprenfpyStack';
import WEBSCRAPStack from './webscrapStack';
import GITStack from './gitStack';
import NPMStack from './npmStack';
import HTMLStack from './htmlStack';
import CSSStack from './cssStack';
import JSVANILLAStack from './jsVanillaStack';
import PHPStack from './phpStack';
import SQLStack from './sqlStack';
import SQL from '../screens/sql';

const RouteConfigs = {
    Accueil: {
        screen: HomeStack,
    },
    MachineLearningPython: {
        screen: MLPYStack,
    },
    ApprentissageRenfPy: {
        screen: APPRENFPYStack,
    },
    WebScraping: {
        screen: WEBSCRAPStack,
    },
    Git: {
        screen: GITStack,
    },
    NPM: {
        screen: NPMStack,
    },
    HTML: {
        screen: HTMLStack,
    },
    CSS: {
        screen: CSSStack,
    },
    JSVanilla: {
        screen: JSVANILLAStack,
    },
    PHP: {
        screen: PHPStack,
    },
    SQL: {
        screen: SQLStack,
    }
};

const DrawerNavigatorConfig = {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: 'white',
        },
    },    
    
    contentOptions: {
        activeTintColor: '#EC7063',
        activeBackgroundColor: '#FAD7A0',
        inactiveBackgroundColor: '#FDEBD0',
        itemsContainerStyle: {
            marginVertical: 0,
            padding: 20,
            marginTop: 20,
        },
        itemStyle: {
            marginTop: 10,
            borderRadius: 8,
        },
        inactiveLabelStyle: {
            color: '#F1948A'
        },
    },
    drawerBackgroundColor: '#FEF5E7',
};

const RootDrawerNavigator = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export default createAppContainer(RootDrawerNavigator);