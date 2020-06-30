import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './homeStack';
import MLPYStack from './mlpyStack';
import APPRENFPYStack from './apprenfpyStack';
import WEBSCRAPStack from './webscrapStack';
import DEVWEBStack from './devwebStack';
import GITStack from './gitStack';
import NPMStack from './npmStack';

const RootDrawerNavigator = createDrawerNavigator({
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
    DevWeb: {
        screen: DEVWEBStack,
    },
    Git: {
        screen: GITStack,
    },
    NPM: {
        screen: NPMStack,
    }
});

export default createAppContainer(RootDrawerNavigator);