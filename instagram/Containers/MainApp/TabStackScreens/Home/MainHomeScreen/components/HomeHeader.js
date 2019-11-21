import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { cameraLogo, instagram, sendLogo } from '../../../../../../constants/images'
import { withNavigation } from 'react-navigation';
import { MessagesScreen, CameraScreen } from '../../../../../../constants/strings';


const HomeHeader = props => {

    const { navigation } = props;

    const GoTo = routeName => {
        navigation.navigate(routeName)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => GoTo(CameraScreen)}
            >
                <Image source={cameraLogo} style={styles.picLogo} />
            </TouchableOpacity>
            <View style={styles.instaContainer}>
                <Image source={instagram} style={styles.instaLogo} />
            </View>
            <TouchableOpacity
                onPress={() => GoTo(MessagesScreen)}
            >
                <Image source={sendLogo} style={styles.sendLogo} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '93%',
        alignSelf: 'center'
    },
    picLogo: {
        width: 30,
        height: 30
    },
    instaLogo: {
        width: 100,
        height: 35,
        marginLeft: 15
    },
    sendLogo: {
        width: 30,
        height: 30
    },
    instaContainer: {
        flex: 1
    }
})
const Component = withNavigation(HomeHeader)
export default React.memo(Component)
