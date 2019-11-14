import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { phoneCode, Phone, phoneText, Next } from '../../../../../constants/strings'

const PhoneForm = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.codeContainer}>
                    <Text style={styles.phoneCode}> {phoneCode} </Text>
                </View>
                <View style={styles.inputInnerContainer}>
                    <TextInput style={styles.inputStyle}
                        caretHidden={true}
                        placeholder={'Phone'}
                        keyboardType='phone-pad'
                        maxLength={20}
                    />
                </View>
            </View>
            <View style={styles.smsTextContainer}>
                <Text style={styles.smsText}>{phoneText}</Text>
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
    codeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        height: 30,
        borderRightColor: '#a3a3a3'
    },
    inputInnerContainer: {
        flex: 3,
    },
    phoneCode: {
        color: '#a3a3a3'
    },
    inputStyle: {
        marginLeft: 10
    },
    smsTextContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    },
    smsText: {
        textAlign: 'center',
        fontSize: 12,
        color: '#a3a3a3'
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

export default PhoneForm
