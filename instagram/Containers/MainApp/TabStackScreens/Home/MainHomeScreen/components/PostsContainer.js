import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Post from '../PostContainer/Post'

const PostsContainer = () => {

    var a = [1,2,3,4]

    return (
        <View style={styles.container}>
            <FlatList 
               data={a}
               renderItem={({item}) => <Post /> }
               keyExtractor={(item) => `${item}`}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    }
})

export default React.memo(PostsContainer)
