import React from 'react'
import { View, StyleSheet } from 'react-native'
import UserProfileIcon from './components/UserProfileIcon'
import Footer from '../components/Footer'
import SignUpSelection from './components/SignUpSelection'
import { haveAccountFooter, logInBtnText, Login } from '../../../../constants/strings'

const NewAccountScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileIcon}>
                <UserProfileIcon />
            </View>
            <View style={styles.content}>
                <SignUpSelection />
            </View>
            <View style={styles.footer}>
                <Footer text={haveAccountFooter} link={logInBtnText} navigateTo={Login} navigation={props.navigation}/>
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
    profileIcon: {
        flex: 5,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 8,
        justifyContent: 'center',
        alignItems : 'center'
    },
    footer: {
        flex: 1
    }
})

export default React.memo(NewAccountScreen)
