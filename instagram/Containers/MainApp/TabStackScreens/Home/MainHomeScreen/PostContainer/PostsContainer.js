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
            var MediaComponent = require('./MediaComponent').default
            if (VideoRefs[`${item.index}`]) {
                if (item.isViewable) {
                    item.index > 2 ? VideoRefs[`${item.index - 2 }`].remove() : null
                    item.index > 1 ? VideoRefs[`${item.index - 1 }`].set(<MediaComponent media={video} type='video' item={item.index - 1 } />) : null
                    VideoRefs[`${item.index}`].set(<MediaComponent media={video} type='video' item={item.index} />)
                    item.index < a.length - 1 ? VideoRefs[`${item.index + 1 }`].set(<MediaComponent media={video} type='video' item={item.index + 1 } />) : null 
                    item.index < a.length - 2 ? VideoRefs[`${item.index + 2 }`].remove() : null 
                }
            }
        });
    }
    const _keyExtractor = (item) => `${item}`
    const _getItemLayout = (item, index) => ({ length: 550, offset: 550 * index, index })
    const _renderItem = ({ item, index }) => <Post index={index} addRefs={addRefs} />
    const _ListHeaderComponent  = () => <StoryContainer /> 
    return (
        <View style={styles.container}>
            <FlatList
                data={a}
                renderItem={_renderItem}
                keyExtractor={_keyExtractor}
                showsVerticalScrollIndicator={false}
                style={{ width: '100%', height: 600 }}
                onViewableItemsChanged={_onViewableItemsChanged}     
                getItemLayout={_getItemLayout}
                ListHeaderComponent ={_ListHeaderComponent}
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