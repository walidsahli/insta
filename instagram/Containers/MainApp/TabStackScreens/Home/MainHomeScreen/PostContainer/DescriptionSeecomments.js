import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DescriptionSeecomments = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.likesText}>120 likes</Text>
            <Text
                style={styles.description}
                numberOfLines={2}
                ellipsizeMode='tail'
            > Fugiat non eu id qui id culpa veniam culpa do voluptate eu deserunt Lorem velit.id qui id culpa veniam culpa do voluptate id qui id culpa veniam culpa do voluptate </Text>
            <Text style={styles.viewComments}>View all 10 comments</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 100,
        width: '100%'
    },
    likesText: {
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 2,
        marginBottom: 5
    },
    description: {
        fontSize: 12,
        marginLeft: 15
    },
    viewComments: {
        color: 'grey',
        marginLeft: 20,
        marginTop: 8
    }
})

export default DescriptionSeecomments
