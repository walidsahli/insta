import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { profileImage, profilePicture } from '../../../../../../constants/images'
import Icon from 'react-native-vector-icons/FontAwesome5'

const PostHeader = () => {
    return (
        <View style={styles.container}>
            <Image source={profilePicture} style={styles.profilePic} />
            <Text style={styles.profileName}>Wa Lid</Text>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.Icon}
            >
                <Icon name='ellipsis-v' style={{width: 20}} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.7
    },
    profilePic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    profileName: {
        fontSize: 13,
        fontWeight: 'bold',
        marginLeft: 15
    },
    Icon: {
        flex: 1,
        alignItems: 'flex-end'
    }
})

export default React.memo(PostHeader)
