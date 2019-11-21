import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HomeHeader from './MainHomeScreen/components/HomeHeader'
import PostsContainer from './MainHomeScreen/PostContainer/PostsContainer'

const Home = props => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HomeHeader />
            </View>
            <View style={styles.content}>
                <PostsContainer />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection :'column',
        alignItems :'center',
        backgroundColor :'white'
    },
    header : {
        flex : 1,
        width : '100%',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.4
    },
    content : {
        flex : 12,
        width : '100%'
    }
})

export default Home
