import React, { useRef, useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Post from './Post'
import StoryContainer from '../components/StoryContainer'

const PostsContainer = () => {

    var a = [1, 2, 3, 4, 5, 6, 10, 7, 1256, 545, 6878, 13151, 8749, 31313, 6846846, 13135418484, 3151568, 87494, 45, 52288, 50, 46, 87, 58, 99, 9663, 56456, 54]
    var VideoRefs = {}
    const addRefs = ref => {
        VideoRefs[ref.index] = ref
    }

    const _onViewableItemsChanged = ({ viewableItems, changed }) => {
        var ItemsToPlay = changed.concat(viewableItems)
        ItemsToPlay.forEach(item => {
            if (VideoRefs[`${item.index}`]) {
                if (item.isViewable) {
                    VideoRefs[`${item.index}`].play(video)
                } else {
                    VideoRefs[`${item.index}`].stop(video)
                }
            }
        });
    }



    const renderItem = ({ item, index }) => index == 0 ? <StoryContainer /> : <Post index={index} addRefs={addRefs} postData={{ media: video, type: 'video' }} />
    return (
        <View style={styles.container}>
            <FlatList
                data={a}
                renderItem={renderItem}
                keyExtractor={(item) => `${item}`}
                showsVerticalScrollIndicator={false}
                initialNumToRender={2}
                style={{ width: '100%', height: 600 }}
                onViewableItemsChanged={_onViewableItemsChanged}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    listStyle: {
        width: '100%',
        alignSelf: 'center'
    }
})

const video = 'https://vjs.zencdn.net/v/oceans.mp4'


export default React.memo(PostsContainer)