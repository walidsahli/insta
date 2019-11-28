import React, { useRef, useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { profileImage } from '../../../../../../constants/images';
import Video from 'react-native-video'

const MediaComponent = ({ media, type , item }) => {
    const VideoPlayer = useRef(null)
    const [Pause, setPause] = useState(false)
    const [Loaded, setLoaded] = useState(false)
    const [Buffer, setBuffer] = useState(false)
    const [Progress, setProgress] = useState(false)
    console.log(media, type, `comp n: ${item}`)
    const onLoad = loadData => {
        setLoaded(loadData.canPlaySlowForward)
    }

    const onBuffer = buffer => {
        console.log(buffer, 'buffer')
        setBuffer(buffer.isBuffering)
    }
    const onEnd = () => {
        // play(VideoUrl)
    }
    const onProgress = progress => {
        setProgress(progress)
    }

    const videoError = err => {
    }

    useEffect(() => {
        console.log( 'mount' , item)
        return () => {
            console.log('died' , item)
        };
    }, [])

    if (type == 'video')
        return (
            <Video
                source={{ uri: media }}   // Can be a URL or a local file.
                ref={VideoPlayer}                                      // Store reference
                onError={videoError}               // Callback when video cannot be loaded
                style={styles.Media}
                resizeMode='contain'
                onProgress={onProgress}
                paused={false}
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
    else
        return (
            <View style={{flex: 1 , backgroundColor: 'red'}}>
            <Image source={profileImage} style={{ width: null, height: null, flex: 1 }} resizeMode='contain' />
            </View>
        )
}

export default MediaComponent

const styles = StyleSheet.create({
    Media: {
        width: Dimensions.get('window').width,
        height: '100%'
    }
})
