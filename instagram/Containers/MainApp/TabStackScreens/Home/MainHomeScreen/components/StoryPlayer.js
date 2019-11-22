import React, { useEffect, useState, useRef } from 'react'
import { View, Keyboard, Modal, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image, Animated, Easing } from 'react-native'
import { sendLogo } from '../../../../../../constants/images'
import Video from 'react-native-video';



const StoryPlayer = ({ Played, StopStory, StoryData }) => {

    const VideoPlayer = useRef(null)
    const progressBar = new Animated.Value(0)

    const SendMessage = () => {
        console.log('ok')
        //// send message then ->
        Stop()
    }

    const Stop = () => {
        StopStory({ media: null, id: null, type: null })
    }

    useEffect(() => {
        if (Played && StoryData.type == 'image') {
            progressBar.setValue(0)
            Animated.timing(progressBar, {
                toValue: 1,
                duration: 5000
            }).start(() => Stop())
            return () => {
            };
        }
    }, [Played])


    const onBuffer = event => {
        console.log(event)
    }

    const videoError = err => {
        console.log(err)
        // Stop()
    }


    return (
        <View>
            <Modal
                visible={Played}
                animationType='fade'
            >
                <View style={styles.container}>
                    {StoryData.type == 'image' ?
                        <Image
                            source={StoryData.media}
                            style={styles.backgroundMedia}
                        />

                        :
                        <Video source={{ uri: StoryData.media }}   // Can be a URL or a local file.
                            ref={VideoPlayer}                                      // Store reference
                            onError={videoError}               // Callback when video cannot be loaded
                            style={styles.backgroundMedia}
                            resizeMode='contain'
                            onEnd={Stop}
                        />
                    }
                    {
                        StoryData.type == 'image' ?
                            <View
                                style={styles.progressContainer}
                            >
                                <Animated.View style={[styles.ProgressBar, { width: progressBar.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }) }]} />
                            </View> :
                            null
                    }

                    <View style={styles.send}>
                        <View style={styles.textInputStyle}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Send a message'}
                                caretHidden={true}
                                placeholderTextColor='white'
                            />
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={SendMessage}
                        >
                            <Image source={sendLogo} style={styles.sendLogo} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        opacity: 1
    },
    textInputStyle: {
        borderWidth: 1.8,
        width: '80%',
        borderRadius: 40,
        height: 50,
        margin: 10,
        borderColor: 'white',
        justifyContent:'center'
    },
    input: {
        marginLeft: 10,
    },
    sendLogo: {
        height: 40,
        width: 40,
        tintColor: 'white'
    },
    send: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        zIndex: 2
    },
    BackImageStyle: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'stretch'
    },
    progressContainer: {
        position: 'absolute',
        top: 10,
        zIndex: 3,
        height: 2,
        width: '90%',
        alignSelf: 'center'
    },
    backgroundMedia: {
        width: null,
        height: null,
        flex: 1
    },
    ProgressBar: {
        backgroundColor: 'white',
        width: '0%',
        left: 0,
        position: 'absolute',
        top: 0, zIndex: 5, height: 2, borderRadius: 2
    }
})

export default React.memo(StoryPlayer)
