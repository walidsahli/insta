import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Phone, Email } from '../../../../../constants/strings'
import { selectedColor, unSelectedColor } from '../../../../../constants/colors'
import PhoneForm from './PhoneForm'
import EmailForm from './EmailForm'

const SignUpSelection = () => {

    ///////////////////////// State //////////////////////////
    const [PhoneColor, setPhoneColor] = useState(selectedColor)
    const [EmailColor, setEmailColor] = useState(unSelectedColor)
    const [FormSelected, setFormSelected] = useState(<PhoneForm />)
    ///////////////////////// End State //////////////////////


    //////////////////////// Functions ////////////////////////
    const selectSignUpMethod = (method) => {
        if (method == Email) {
            setEmailColor(selectedColor)
            setPhoneColor(unSelectedColor)
            setFormSelected(<EmailForm />)
        } else {
            setEmailColor(unSelectedColor)
            setPhoneColor(selectedColor)
            setFormSelected(<PhoneForm />)
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.selector}>
                <TouchableOpacity activeOpacity={10} style={{ ...styles.selectorBox, borderBottomColor: PhoneColor }} onPress={() => selectSignUpMethod(Phone)} >
                    <Text style={{ ...styles.selectorText, color: PhoneColor }} >{Phone}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={10} style={{ ...styles.selectorBox, borderBottomColor: EmailColor }} onPress={() => selectSignUpMethod(Email)}>
                    <Text style={{ ...styles.selectorText, color: EmailColor }}>{Email}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.component}>
                {FormSelected}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '90%'
    },
    selector: {
        flex: 0.6,
        flexDirection: 'row',
    },
    component: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop : 20
    },
    selectorBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2
    },
    selectorText: {
        fontWeight: 'bold'
    }
})



export default SignUpSelection
