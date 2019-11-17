import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CameraRoll from "@react-native-community/cameraroll";


const BrowseFiles = () => {


    var getPictures = () => {
        CameraRoll.getPhotos({
            first: 5,
            groupTypes: 'All'
        }).then( data => {
            console.log(data)
        })
    }


    return (
        <View style={styles.container}>
            <View style={styles.MediaViewer}>

            </View>
            <View style={styles.MediaBrowser}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    MediaViewer : {
        flex: 3,
        backgroundColor: 'red'
    },
    MediaBrowser: {
        flex : 2,
        backgroundColor: 'grey'
    }
})

export default React.memo(BrowseFiles)
