import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { forgotLogin, getHelp, fbLogin, dontHaveAccount } from '../../../../../constants/strings'
import { facebook } from '../../../../../constants/images'
import { GlobalServiceContext } from '../../../../../App'
import { withNavigation } from 'react-navigation'

const FacebookLogin = (props) => {

    /////////////////////////// Context /////////////////////////////
    const GlobalService = useContext(GlobalServiceContext)
    ////////////////////////// Declaration //////////////////////////
    const { navigation } = props

    /////////////////////////// functions ///////////////////////////
    const LoginWithFacebook = () => {
        GlobalService.LoginWithFacebook(navigation)
    }

    return (
        <View style={styles.container} >
            <Text style={styles.forgotLogin}>{forgotLogin} {getHelp}</Text>
            <TouchableOpacity
                style={{ flexDirection: 'row' }}
                activeOpacity={0.9}
                onPress={LoginWithFacebook}
            >
                <Image style={styles.facebookLogo} source={facebook} />
                <Text style={styles.fbLogin}> {fbLogin} </Text>
            </TouchableOpacity>
            <View style={styles.OrStyle}>
                <Text style={styles.OrLine}></Text>
                <Text style={styles.OrText}>OR</Text>
                <Text style={styles.OrLine}></Text>
            </View>
            <Text style={styles.forgotLogin}> {dontHaveAccount} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    forgotLogin: {
        color: '#adadad',
        fontSize: 12,
        marginBottom: 30
    },
    fbLogin: {
        color: "#009cc7",
        fontSize: 14,
        fontWeight: 'bold'
    },
    OrStyle: {
        flexDirection: 'row',
        margin: 15
    },
    OrLine: {
        borderWidth: 0.2,
        width: '40%',
        height: 0.7,
        alignSelf: 'center',
        borderColor: '#adadad'
    },
    OrText: {
        marginLeft: 10,
        marginRight: 10,
        color: '#adadad'
    },
    facebookLogo: {
        height: 20,
        width: 20,
        tintColor: '#009cc7'
    }
})

const Component = withNavigation(FacebookLogin)
export default React.memo(Component)
