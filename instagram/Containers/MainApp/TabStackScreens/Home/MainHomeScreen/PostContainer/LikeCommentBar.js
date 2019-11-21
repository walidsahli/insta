import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const LikeCommentBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.Icon} activeOpacity={0.6}>
                <Icon name='heart' size={32} color='grey' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Icon} activeOpacity={0.6}>
                <Icon name='message-circle' size={32} color='grey'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    Icon:{
        alignItems: 'center',
        margin: 10
    }
})

export default React.memo(LikeCommentBar)
