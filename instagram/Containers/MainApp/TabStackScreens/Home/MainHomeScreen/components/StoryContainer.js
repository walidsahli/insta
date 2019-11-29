import React, { useState, lazy, Suspense } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import StoryItem from './StoryItem'
// import StoryPlayer from './StoryPlayer'

const StoryPlayer = lazy(() => import('./StoryPlayer'))

const StoryContainer = () => {
    // const a = [{ media: require('../../../../../../assets/post.jpeg'), id: 0, type: 'video' }]
    const a = [{ media: 'https://vjs.zencdn.net/v/oceans.mp4', id: 0, type: 'video' }]
    const [Play, setPlay] = useState(false)
    const [StoryData, setStoryData] = useState({ media: null, id: null,type: null})

    const toggleStory = data => {
        setPlay(!Play)
        setStoryData(data)
    }

    const _ListHeaderComponent = () => <StoryItem toggleStory={toggleStory} item={null} />

    return (
        <View style={styles.container}>
            <FlatList
                data={a}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <StoryItem toggleStory={toggleStory} item={item} />}
                windowSize={8}
                keyExtractor={item => `${item}`}
                ListHeaderComponent={_ListHeaderComponent}
            />
            <Suspense fallback={<Text>Error</Text>}>
                <StoryPlayer Played={Play} StopStory={toggleStory} StoryData={StoryData} />
            </Suspense>
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
