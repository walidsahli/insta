
export default class globalService {
    constructor() {}

    LoginWithEmailAndPassword = async navigation => {
        navigation.navigate('Main')
    }
    
    LoginWithFacebook = async navigation => {
        const LoginManager = require('react-native-fbsdk').LoginManager
        LoginManager.logInWithPermissions(["public_profile"]).then(
            function (result) {
                if (result.isCancelled) {
                    null
                } else {
                    navigation.navigate('Main')
                }
            },
            function (error) {
                null
            }
        );
    }
}