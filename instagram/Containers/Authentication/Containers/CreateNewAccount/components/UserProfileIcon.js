import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { profileImage, instagram } from '../../../../../constants/images'

const UserProfileIcon = () => {
    return (
        <View style={styles.container}>
            <Image source={profileImage} style={styles.image}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        height : 170,
        justifyContent: 'center',
        alignItems : 'center',
        borderWidth : 2,
        borderRadius : 400,
        width : 170,
        backgroundColor :'white'
    },
    image : {
        resizeMode :'center',
        width: '70%'
    }
})

export default UserProfileIcon
