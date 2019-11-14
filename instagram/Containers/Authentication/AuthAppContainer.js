import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import Welcome from './Containers/Welcome';
import NewAccountScreen from './Containers/CreateNewAccount/NewAccountScreen';
import Login from './Containers/Login/Login';

const RouteConfigs = {
    Welcome : {
        screen : Welcome
    },
    NewAccount : {
        screen : NewAccountScreen
    },
    Login : {
        screen : Login
    }
}

const StackNavigatorConfig = {
    initialRouteName : 'Welcome',
    backBehavior : 'history'
}

var Auth = createSwitchNavigator(RouteConfigs, StackNavigatorConfig);
export default Auth

