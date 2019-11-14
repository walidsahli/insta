import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { enableScreens } from 'react-native-screens';
import Auth from './Authentication/AuthAppContainer';
import Main from './MainApp/Main';

enableScreens();

///////////////////// Root Navigation ////////////////////
const RouteConfigs = {
    Authentication: {
        screen: Auth
    },
    Main: {
        screen: Main
    }
}

const SwitchNavigatorConfig = {
    initialRouteName: 'Authentication'
}

const navigator = createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);
const RootApplication = createAppContainer(navigator)

export default RootApplication
