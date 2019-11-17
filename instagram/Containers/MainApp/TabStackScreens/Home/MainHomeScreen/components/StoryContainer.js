import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import StoryItem from './StoryItem'
import StoryPlayer from './StoryPlayer'

const StoryContainer = () => {
    const a = [{ media : require('../../../../../../assets/post.jpeg') , id : 0} ]
    const [Play, setPlay] = useState(false)
    const [StoryData, setStoryData] = useState({media : null, id: null})

    const toggleStory = data => {
        setPlay(!Play)
        setStoryData(data)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={a}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <StoryItem toggleStory={toggleStory} item={item} />}
                keyExtractor={item => `${item}`}
            />
            <StoryPlayer Played={Play} StopStory={toggleStory} StoryData={StoryData} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 110,
        width: '100%',
        borderColor: 'grey',
        borderBottomWidth: 0.2,
        borderTopWidth: 0.2
    }
})

export default React.memo(StoryContainer)
