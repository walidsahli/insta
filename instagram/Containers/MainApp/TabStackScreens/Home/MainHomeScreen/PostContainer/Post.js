import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import LikeCommentBar from './LikeCommentBar'

const Post = ({postDate}) => {
    
    return (
        <View style={styles.container}>
            <PostHeader />
            <PostContent image={postDate.image} />
            <LikeCommentBar />
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        width: '100%',
        alignItems: 'center',
        alignSelf :'center',
        height: 550,
        marginBottom: 10
    }
})

export default React.memo(Post)
