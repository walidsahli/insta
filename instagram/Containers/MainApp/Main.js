import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react'
import Home from './TabStackScreens/Home/Home'
import Search from './TabStackScreens/Search/Search'
import Profile from './TabStackScreens/Profile/Profile';
import Notifications from './TabStackScreens/Notifications/Notifications'
import { createStackNavigator } from 'react-navigation-stack';
import MessagesScreen from './MessagesScreen/MessagesScreen';
import CameraScreen from './CameraScreen/CameraScreen';
import { Animated, Easing } from 'react-native'
import GalleryScreen from './GalleryScreen/GalleryScreen';
import TabNavigatorComponent from './TabStackScreens/TabNavigatorComponent';

const RouteConfigs = {
    Home: {
        screen: Home
    },
    Search: {
        screen: Search
    },
    Notifications: {
        screen: Notifications
    },
    Profile: {
        screen: Profile
    }
}

const TabNavigatorConfig = {
    intitialRouteName: 'Home',
    backBehavior: 'history',
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeTintColor: 'black',
        inactiveTintColor: 'grey'
    },
    tabBarComponent: () => (
        <TabNavigatorComponent />
    )
}




const MainTabApplication = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);



////////////////////////////////////////////////////////////////////////////////////////
const Main = createStackNavigator({
    MainTabApplication: {
        screen: MainTabApplication
    },
    MessagesScreen: {
        screen: MessagesScreen
    },
    GalleryScreen: {
        screen: GalleryScreen
    },
    CameraScreen: {
        screen: CameraScreen
    }
}, {
    headerMode: 'none',
    initialRouteName: 'MainTabApplication',
    transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;
            var transition ; 
            if(scene.route.routeName == 'CameraScreen'){
                transition = {
                    translateX: position.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [-layout.initWidth, 0, 0]
                    })
                }
            }
            else if (scene.route.routeName == 'MessagesScreen'){
                transition = {
                    translateX: position.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [layout.initWidth, 0, 0]
                    })
                }
            }else {
                transition = {
                    translateY: position.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [layout.initHeight, 0, 0]
                    })
                }
            }
            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });
            return { opacity, transform: [ transition ] };
        },
    })
})

export default Main
