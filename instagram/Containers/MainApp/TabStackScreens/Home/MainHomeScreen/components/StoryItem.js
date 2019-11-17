import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { profileImage, plusLogo, profilePicture } from '../../../../../../constants/images'

const StoryItem = props => {


    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.imageContainer}
                activeOpacity={0.8}
                onPress={() => props.toggleStory(props.item)}
            >
                <Image source={profilePicture} style={styles.image} />
            </TouchableOpacity>
            <Image source={plusLogo} style={styles.plus} />
            <Text style={styles.name}>Your Story</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        width: 90,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    image: {
        height: 68,
        width: 68,
        borderRadius: 45,
        alignItems: 'center',
        resizeMode: 'center',
        borderRadius: 99999
    },
    plus: {
        height: 17,
        width: 17,
        bottom: 21,
        left: 68,
        tintColor: '#2ab8f5',
        position: 'absolute'
    },
    imageContainer: {
        borderWidth: 0.7,
        borderRadius: 50,
        width: 70,
        height: 70,
        borderColor: 'grey',
        position: 'absolute',
        top: 0
    },
    name: {
        top: 37,
        fontSize: 11
    }
})

export default React.memo(StoryItem)
