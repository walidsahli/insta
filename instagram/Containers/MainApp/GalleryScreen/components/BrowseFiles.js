import React, { useReducer, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, PermissionsAndroid } from 'react-native'
import CameraRoll from "@react-native-community/cameraroll";

const ADD = 'ADD'

const ADD_ACTION = payload => ({
    type: ADD,
    payload: payload
})

const reducer = (state, { type, payload }) => {
    switch (type) {
        case ADD:
            return [...state, payload]

        default:
            return state
    }
}


const BrowseFiles = () => {

    const [Files, filesDispatch] = useReducer(reducer, [])
    var Permission = false

    var getPictures = async (pointer = null) => {
        if (!Permission) {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
            Permission = granted == 'granted' ? true : false
        } else {
            CameraRoll.getPhotos({
                first: 10,
                groupTypes: 'Library',
            }).then( data => {
                console.log(data.edges, 'data')
            })
        }
    }

    useEffect(() => {
        getPictures()
        console.log(Files, 'files')
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.MediaViewer}>

            </View>
            <View style={styles.MediaBrowser}>
                <FlatList
                    data={Files}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    MediaViewer: {
        flex: 3,
        backgroundColor: 'red'
    },
    MediaBrowser: {
        flex: 2,
        backgroundColor: 'grey'
    }
})

export default React.memo(BrowseFiles)
