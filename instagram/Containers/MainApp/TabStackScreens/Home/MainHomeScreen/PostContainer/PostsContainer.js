import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Post from './Post'
import StoryContainer from '../components/StoryContainer'

const PostsContainer = () => {

    var a = [1,2,3,4,5,6,10,7,54,1256]

    return (
        <View style={styles.container}>
            <FlatList 
               data={a}
               renderItem={({item , index}) => index==0? <StoryContainer /> :<Post postDate={{image : require('../../../../../../assets/post.jpeg')}} /> }
               keyExtractor={(item) => `${item}`}
               showsVerticalScrollIndicator={false}
               style={{width: '100%' , height: 600}}
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
    },
    listStyle: {
        width: '100%',
        alignSelf : 'center'
    }
})

export default React.memo(PostsContainer)
