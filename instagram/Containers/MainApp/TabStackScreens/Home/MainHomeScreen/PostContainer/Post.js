import React, { useRef, useState, useEffect, Suspense } from 'react'
import { View, StyleSheet, Dimensions, Image, ActivityIndicator, Text } from 'react-native'
import PostHeader from './PostHeader'
import LikeCommentBar from './LikeCommentBar'
import DescriptionSeecomments from './DescriptionSeecomments'
import Video from 'react-native-video'

const Post = (props) => {

    const { postData, index } = props
    const VideoPlayer = useRef(null)
    const [Pause, setPause] = useState(false)
    const [Loaded, setLoaded] = useState(false)
    const [Buffer, setBuffer] = useState(false)
    const [Progress, setProgress] = useState(false)
    const [Component, setComponent] = useState(false)


    useEffect(() => {
        props.addRefs({ set: set, remove: remove, index: index })
    }, [postData])

    const set = component => {
        console.log(component)
        setComponent(component)
    }

    const remove = () => {
        setComponent(null)
    }

    return (
        <View style={styles.container}>
            <PostHeader />
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                { Component ? Component : null}
            </View>
            <LikeCommentBar />
            <DescriptionSeecomments />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        height: 550,
        // marginBottom: 10
    },
    content: {
        flex: 1,
        width: '100%'
    },
    Media: {
        width: Dimensions.get('window').width,
        height: '100%'
    }
})

export default React.memo(Post)


 // {/* <ActivityIndicator size={40} style={{ position: "absolute", alignSelf: "center", zIndex: 5, top: 160 }} color='black' /> */}
