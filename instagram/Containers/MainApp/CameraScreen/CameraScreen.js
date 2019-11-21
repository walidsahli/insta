import React, { useRef, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import AntIcon from 'react-native-vector-icons/AntDesign'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { withNavigation } from 'react-navigation';


const CameraScreen = (props) => {

    const camera = useRef(null)
    const [Orientation, setOrientation] = useState(RNCamera.Constants.Type.back)

    const takePicture = async () => {
        if (camera.current) {
            const options = { quality: 0.5, base64: true };
            const data = await camera.current.takePictureAsync(options);
            console.log(data.uri);
        }
    };

    const closeCamera = () => {
        props.navigation.navigate('Home')
    }

    const changeCamera = () => {
        const { back, front } = RNCamera.Constants.Type
        setOrientation(Orientation == back ? front : back)
    }

    return (
        <View style={styles.container}>
            <RNCamera
                ref={camera}
                style={styles.preview}
                type={Orientation}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
            />
            <TouchableOpacity onPress={takePicture} style={styles.capture} >
                <View style={styles.point} />
            </TouchableOpacity>
            <AntIcon name='close' style={styles.close} color='white' size={40} onPress={closeCamera} />
            <FontIcon name='redo-alt' style={styles.change} color='white' size={35} onPress={changeCamera} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        position: 'absolute',
        height: 80,
        width: 80,
        borderRadius: 40,
        alignSelf: 'center',
        bottom: 30,
        borderWidth: 1,
        borderColor: 'white'
    },
    point: {
        height: 60,
        width: 60,
        backgroundColor: 'white',
        position: 'absolute',
        alignSelf: 'center',
        bottom: 9,
        borderRadius: 30
    },
    close: {
        position: 'absolute',
        right: 15,
        top: 10
    },
    change: {
        position: 'absolute',
        left: 15,
        top: 10
    }
});

export default React.memo(withNavigation(CameraScreen))
