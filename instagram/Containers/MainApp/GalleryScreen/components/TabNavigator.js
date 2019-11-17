import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import GalleryNavigationService from '../GalleryNavigationService'

const TabNavigator = props => {

    const [CurrentTab, setCurrentTab] = useState('PHOTO')

    const selectTab = tabName => {
        setCurrentTab(tabName)
        GalleryNavigationService.navigate(tabName)
    }

    return (
        <View style={styles.container}>
            <Text
                onPress={() => selectTab('GALLERY')}
                style={CurrentTab == 'GALLERY' ? { ...styles.textStyle, color: 'black', borderBottomColor: 'black' } : styles.textStyle}
            >GALLERY</Text>
            <Text
                onPress={() => selectTab('PHOTO')}
                style={CurrentTab == 'PHOTO' ? { ...styles.textStyle, color: 'black', borderBottomColor: 'black' } : styles.textStyle}
            >PHOTO</Text>
            <Text
                onPress={() => selectTab('VIDEO')}
                style={CurrentTab == 'VIDEO' ? { ...styles.textStyle, color: 'black', borderBottomColor: 'black' } : styles.textStyle}
            >VIDEO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        flex: 1,
        textAlign: 'center',
        borderBottomWidth: 3,
        padding: 14,
        borderColor: 'grey',
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 15
    }
})

export default withNavigation(TabNavigator)
