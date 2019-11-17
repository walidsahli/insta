import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { withNavigation } from 'react-navigation'


const TabNavigatorComponent = ({ navigation }) => {

    const [Active, setActive] = useState('Home')

    const Goto = (routeName) => {
        navigation.navigate(routeName)
        setActive(routeName)
    }

    return (
        <View style={styles.container}>
            <Icon name="home" color={Active == 'Home' ? 'black' : 'grey'} size={25} onPress={() => Goto('Home')} />
            <Icon name="search" color={Active == 'Search' ? 'black' : 'grey'} size={25} onPress={() => Goto('Search')} />
            <Icon name="plus-square" color={Active == 'GalleryScreen' ? 'black' : 'grey'} size={25} onPress={() => Goto('GalleryScreen')} />
            <Icon name="heart" color={Active == 'Notifications' ? 'black' : 'grey'} size={25} onPress={() => Goto('Notifications')} />
            <Icon name="user" color={Active == 'Profile' ? 'black' : 'grey'} size={25} onPress={() => Goto('Profile')} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85%',
        alignSelf: 'center'
    }
})

export default React.memo(withNavigation(TabNavigatorComponent))
