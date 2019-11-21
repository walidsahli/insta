import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native'
import Video from 'react-native-video'


const PostContent = (props) => {
    const { data } = props
    const VideoPlayer = useRef(null)
    const [Pause, setPause] = useState(true)

    const videoError = err => {

    }

    return (
        <View style={styles.container}>
            {
                data.type == 'image' ?
                    <Image source={data.media} resizeMode='contain' style={styles.Media} />
                    :
                    <Video
                        source={{ uri: data.media }}   // Can be a URL or a local file.
                        ref={VideoPlayer}                                      // Store reference
                        onError={videoError}               // Callback when video cannot be loaded
                        style={styles.Media}
                        resizeMode='contain'
                        paused={Pause}
                    />
            }
        </View>
    )
}
const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%'
    },
    Media: {
        width: Dimensions.get('window').width,
        height: '100%'
    }
})

export default React.memo(PostContent)
