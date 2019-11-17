import React from 'react'
import { View, Text, Modal, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native'
import { sendLogo } from '../../../../../../constants/images'


const StoryPlayer = ({ Played, StopStory, StoryData }) => {

    const SendMessage = () => {
        //// send message then ->
        StopStory({ media: null, id: null })
    }

    return (
        <View>
            <Modal
                visible={Played}
                animationType='fade'
            >
                <ImageBackground style={styles.container} source={StoryData.media} imageStyle={{ resizeMode: 'contain' }}>
                </ImageBackground>
                <View style={styles.send}>
                <View style={styles.textInputStyle}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Send a message'}
                        caretHidden={true}
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={SendMessage}
                >
                    <Image source={sendLogo} style={styles.sendLogo} />
                </TouchableOpacity>
                </View>
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
        borderColor: 'grey'
    },
    input: {
        marginLeft: 10
    },
    sendLogo :{
        height: 40,
        width: 40,
        tintColor: 'grey'
    },
    send: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default React.memo(StoryPlayer)
