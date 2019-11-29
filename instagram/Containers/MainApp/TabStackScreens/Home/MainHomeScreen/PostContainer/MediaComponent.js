import React, { useRef, useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { profileImage } from '../../../../../../constants/images';
import Video from 'react-native-video'

const MediaComponent = ({ media, type, item }) => {
    const VideoPlayer = useRef(null)
    const [Pause, setPause] = useState(false)
    const [Loaded, setLoaded] = useState(false)
    const [Buffer, setBuffer] = useState(false)
    const [Progress, setProgress] = useState(false)
    console.log(media, type, `comp n: ${item}`)
    const onLoad = loadData => {
        setLoaded(loadData.canPlaySlowForward)
    }

    const t = item % 2 == 0 ? 'video' : 'image'

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
        console.log('mount', item)
        return () => {
            console.log('died', item)
        };
    }, [])

    if (t == 'video')
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
                onVideoBuffer={onBuffer}/>
        )
    else
        return (
            <View style={{ flex: 1}}>
                <Image source={{ uri: img }} style={{ width: Dimensions.get('window').width, height: 500, flex: 1}} resizeMode='contain' />
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

const img = "https://i.dailymail.co.uk/1s/2019/04/18/10/12427172-0-image-a-20_1555581069374.jpg"