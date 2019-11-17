import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import GalleryHeader from './components/GalleryHeader'
import TabNavigator from './components/TabNavigator'
import NavigationService from './GalleryNavigationService'
import GalleryNavigatorApp from './GalleryNavigatorApp'


const GalleryScreen = () => {

   
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <GalleryHeader />
            </View>
            <View style={styles.content}>
                <GalleryNavigatorApp
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </View>
            <View style={styles.tabNavigator}>
                <TabNavigator />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 50
    },
    content: {
        flex: 1
    },
    tabNavigator: {
        height: 50
    }
})

export default GalleryScreen
