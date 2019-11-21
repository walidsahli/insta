import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Footer from '../components/Footer'
import { welcomeScreen } from '../../../../constants/strings'
import LoginForm from './components/LoginForm'
import { instagram } from '../../../../constants/images'
import FacebookLogin from './components/FacebookLogin'

const Login = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={instagram} />
                </View>
                <View style={styles.loginForm}>
                    <LoginForm />
                </View>
                <View style={styles.facebookContainer}>
                    <FacebookLogin />
                </View>
            </View>
            <View style={styles.footer}>
                <Footer text={welcomeScreen} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    footer: {
        flex: 1
    },
    content: {
        flex: 13,
        flexDirection :'column',
        justifyContent :'center'
    },
    loginForm: {
        flex: 2,
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignSelf: 'center'
    },
    logoContainer: {
        flex: 2,
        flexDirection : 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        height: '50%',
        resizeMode: 'center',
        width: '50%'
    },
    facebookContainer: {
        flex : 2,
        flexDirection : 'column'
    }
})

export default React.memo(Login)
