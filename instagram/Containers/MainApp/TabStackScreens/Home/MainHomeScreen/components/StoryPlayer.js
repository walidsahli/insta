import React from 'react'
import { View, Text, Modal } from 'react-native'


const StoryPlayer = ({ Played, StopStory }) => {

    return (
        <View>
            <Modal
                visible={Played}
                animationType='fade'
            >
                <View style={{ width: '100%', backgroundColor: 'white' }}>
                    <Text onPress={StopStory}>I am the modal content!</Text>
                </View>
            </Modal>
        </View>
    )
}

export default React.memo(StoryPlayer)
