import React, { useEffect, useState } from 'react'
import { View, Keyboard, Modal, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native'
import { sendLogo } from '../../../../../../constants/images'
import * as Progress from 'react-native-progress';


const StoryPlayer = ({ Played, StopStory, StoryData }) => {

    const SendMessage = () => {
        //// send message then ->
        StopStory({ media: null, id: null })
    }

    const [Blur, setBlur] = useState(0)
    const [ProgressStatus, setProgressStatus] = useState(0)
    var Timer = null ;
    useEffect(() => {
        if (Played) {
            setProgressStatus(0)
            var keyboardDidShowListener = Keyboard.addListener(
                'keyboardDidShow',
                _keyboardDidShow,
            );
            var keyboardDidHideListener = Keyboard.addListener(
                'keyboardDidHide',
                _keyboardDidHide,
            );
            Timer = setInterval(progress, 10)
            return () => {
                keyboardDidShowListener.remove()
                keyboardDidHideListener.remove()
                clearInterval(Timer)
            };
        }
    }, [Played])

    var _keyboardDidShow = () => {
        setBlur(20)
    }
    var _keyboardDidHide = () => {
        setBlur(0)
    }
    var progress = () => {
        setProgressStatus(prevState => {
            if(prevState > 1) {
                StopStory({ media: null, id: null })
                clearInterval(Timer)
            }
            return prevState + 0.001
        })
    }

    return (
        <View>
            <Modal
                visible={Played}
                animationType='fade'
            >
                <ImageBackground
                    style={styles.container}
                    source={StoryData.media}
                    imageStyle={styles.BackImageStyle}
                    blurRadius={Blur}
                >
                    <View
                        style={styles.progressContainer}
                    >
                        <Progress.Bar
                            progress={ProgressStatus}
                            width={null}
                            borderWidth={0}
                            color='white'
                            height={2}
                        />
                    </View>
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
                </ImageBackground>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textInputStyle: {
        borderWidth: 1.8,
        width: '80%',
        borderRadius: 40,
        height: 50,
        margin: 10,
        borderColor: 'white'
    },
    input: {
        marginLeft: 10
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
        bottom: 0
    },
    BackImageStyle: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'stretch'
    },
    progressContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 15
    }
})

export default React.memo(StoryPlayer)
