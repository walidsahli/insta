import React, {useContext} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Login } from '../../../../../constants/strings'
import { GlobalServiceContext } from '../../../../../App'
import { withNavigation } from 'react-navigation';


const LoginForm = (props) => {
    ///////////////////////// context ///////////////////////
    const GlobalService = useContext(GlobalServiceContext)
    //////////////////////// declarations ///////////////////
    const { navigation } = props
    /////////////////////// Functions ///////////////////////
    const LoginWithCredentials = () => {
        GlobalService.LoginWithEmailAndPassword(navigation)
    }



    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputStyle}
                    caretHidden={false}
                    selectionColor={'grey'}
                    placeholder={'Phone number, email or username'}
                    maxLength={50}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputStyle}
                    caretHidden={false}
                    selectionColor={'grey'}
                    placeholder={'Password'}
                    maxLength={50}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={styles.logInBtn}
                activeOpacity={0.8}
                onPress={LoginWithCredentials}
                >
                <Text style={styles.logInBtnText}> {Login} </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection : 'column'
    },
    inputContainer: {
        backgroundColor: '#f7f7f7',
        width: '100%',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        flexDirection: 'row',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom : 20
    },
    inputStyle: {
        marginLeft : 10
    },
    logInBtn: {
        justifyContent: 'center',
        alignItems :'center',
        height: 50,
        borderRadius: 5,
        backgroundColor: '#009cc7'
    },
    logInBtnText: {
        color: 'white', 
        fontWeight :'bold'
    }
})

const Component = withNavigation(LoginForm)
export default React.memo(Component)
