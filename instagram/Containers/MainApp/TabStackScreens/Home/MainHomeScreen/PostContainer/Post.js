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
    const [VideoPlayerComponent, setVideoPlayerComponent] = useState(false)
    var VideoUrl;
    const videoError = err => {
    }

    useEffect(() => {
        props.addRefs({ play: play, stop: stop, index: index })
    }, [postData])

    const play = url => {
        VideoUrl = url
        setVideoPlayerComponent(
                <Video
                    source={{ uri: VideoUrl }}   // Can be a URL or a local file.
                    ref={VideoPlayer}                                      // Store reference
                    onError={videoError}               // Callback when video cannot be loaded
                    style={styles.Media}
                    resizeMode='contain'
                    onProgress={onProgress}
                    paused={Buffer}
                    onBuffer={onBuffer}
                    onLoad={onLoad}
                    onEnd={onEnd}
                    onVideoBuffer={onBuffer}
                    bufferConfig={{
                        minBufferMs: 1000,
                        maxBufferMs: 2000,
                        bufferForPlaybackMs: 1000,
                        bufferForPlaybackAfterRebufferMs: 2000
                    }} />
        )
        setPause(false)
    }

    const stop = () => {
        setProgress(null)
        setVideoPlayerComponent(null)
    }

    const onLoad = loadData => {
        setLoaded(loadData.canPlaySlowForward)
    }

    const onBuffer = buffer => {
        console.log(buffer,'buffer')
        setBuffer(buffer.isBuffering)
    }
    const onEnd = () => {
        play(VideoUrl)
    }
    const onProgress = progress => {
        setProgress(progress)
    }

    return (
        <View style={styles.container}>
            <PostHeader />
            <View style={styles.content}>
                {
                    postData.type == 'image' &&
                    <Image source={postData.media} resizeMode='contain' style={styles.Media} />
                }{
                    postData.type == 'video' && VideoPlayerComponent
                }
                {Progress == null || !Loaded ? <ActivityIndicator size={40} style={{ position: "absolute", alignSelf: "center", zIndex: 5, top: 160 }} color='black' /> : null}
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
        marginBottom: 10
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

export default Post
