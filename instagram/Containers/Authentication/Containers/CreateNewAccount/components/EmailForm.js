import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Next } from '../../../../../constants/strings'

const EmailForm = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputStyle}
                    caretHidden={false}
                    selectionColor={'grey'}
                    placeholder={'Email'}
                    keyboardType='email-address'
                    maxLength={50}
                />
            </View>
            <TouchableOpacity style={styles.nextBtn}
                activeOpacity={0.8}
                disabled={true}
            >
                <Text style={styles.nextBtnText}> {Next} </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
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
        flexDirection: 'row'
    },
    inputStyle: {
        marginLeft : 10
    },
    nextBtn: {
        backgroundColor: '#009cc7',
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    nextBtnText: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default EmailForm
