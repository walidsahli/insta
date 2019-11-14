import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Footer from './components/Footer'
import { welcomeScreen, createAccountBtnText, logInBtnText, NewAccount, Login } from '../../../constants/strings'
import { instagram } from '../../../constants/images'

const Welcome = (props) => {


    //////////////////// Functions ///////////////////////
    goTo = routeName => {
        props.navigation.navigate(routeName)
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={instagram} style={styles.logo} />
                <TouchableOpacity style={styles.createAccountBtn}
                    activeOpacity={0.8}
                    onPress={() => goTo(NewAccount)}
                >
                    <Text style={styles.createAccountBtnText} >{createAccountBtnText}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}
                    activeOpacity={0.8}
                    onPress={() => goTo(Login)}
                >
                    <Text style={styles.loginBtnText}>{logInBtnText}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer} >
                <Footer text={welcomeScreen} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    content: {
        flex: 12,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1
    },
    logo: {
        width: '50%',
        height: '20%',
        resizeMode: 'center'
    },
    createAccountBtn: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009cc7',
        borderRadius: 5,
        marginTop: 30
    },
    createAccountBtnText: {
        color: 'white',
        fontWeight: 'bold'
    },
    loginBtn: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 30
    },
    loginBtnText: {
        color: '#009cc7',
        fontWeight: 'bold'
    }
})

export default React.memo(Welcome)
