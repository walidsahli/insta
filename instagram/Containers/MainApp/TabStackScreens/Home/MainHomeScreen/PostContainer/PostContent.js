import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'


const PostContent = ({ image }) => {


    return (
        <ImageBackground
            source={image}
            style={styles.container}>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    Media: {
        resizeMode: 'center'
    }
})

export default PostContent
