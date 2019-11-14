import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react'
import Home from './TabStackScreens/Home/Home'
import Search from './TabStackScreens/Search/Search'
import Profile from './TabStackScreens/Profile/Profile';
import Camera from './TabStackScreens/Camera/Camera'
import Notifications from './TabStackScreens/Notifications/Notifications'
import Icon from 'react-native-vector-icons/Feather'
import { createStackNavigator } from 'react-navigation-stack';
import MessagesScreen from './MessagesScreen/MessagesScreen';
import CameraScreen from './CameraScreen/CameraScreen';
import { Animated, Easing } from 'react-native'

const RouteConfigs = {
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" color={tintColor} size={25} />
            )
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="search" color={tintColor} size={25} />
            )
        }
    },
    Camera: {
        screen: Camera,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="plus-square" color={tintColor} size={25} />
            )
        }
    },
    Notifications: {
        screen: Notifications,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="heart" color={tintColor} size={25} />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="user" color={tintColor} size={25} />
            )
        }
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
    }
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
            const width = scene.route.routeName == 'CameraScreen' ? -layout.initWidth : layout.initWidth;
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [width, 0, 0],
            });
            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });
            return { opacity, transform: [{ translateX: translateX }] };
        },
    })
})

export default Main
