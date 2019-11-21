import React, { useRef , useState, useEffect } from 'react'
import { View, StyleSheet, Dimensions, Image } from 'react-native'
import PostHeader from './PostHeader'
// import PostContent from './PostContent'
import LikeCommentBar from './LikeCommentBar'
import DescriptionSeecomments from './DescriptionSeecomments'
import Video from 'react-native-video'


const Post = (props) => {

    const { postData, index } = props
    const VideoPlayer = useRef(null)
    const [Pause, setPause] = useState(false)

    const videoError = err => {
        console.log(err)
    }

    useEffect(() => {
       props.addRefs({play: play, stop: stop , index:index})
    }, [])

    const play = () => {
        setPause(false)
    }

    const stop = () => {
        setPause(true)
    }


    return (
        <View style={styles.container}>
            <PostHeader />
            <View style={styles.content}>
                {
                    postData.type == 'image' ?
                        <Image source={postData.media} resizeMode='contain' style={styles.Media} />
                        :
                        <Video
                            source={{ uri: postData.media }}   // Can be a URL or a local file.
                            ref={VideoPlayer}                                      // Store reference
                            onError={videoError}               // Callback when video cannot be loaded
                            style={styles.Media}
                            resizeMode='contain'
                            paused={Pause}
                            poster='https://thumbs.gfycat.com/VibrantHeavyFrogmouth-size_restricted.gif'
                        />
                }
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

export default React.memo(Post)
