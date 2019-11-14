import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import StoryItem from './StoryItem'

const StoryContainer = () => {
    const a = [1,2,3,4,5,6]

    return (
        <View style={styles.container}
        >
            <FlatList
                data={a}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <StoryItem /> }
                keyExtractor={item => `${item}`}
            />
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
