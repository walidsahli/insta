import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Footer = (props) => {
    var { navigation } = props
    return (
        <View style={styles.container}>
            <Text style={styles.text} >{props.text}</Text>
            <Text style={styles.login}
                onPress={() => navigation.navigate(props.navigateTo)}>{props.link ? props.link : null}</Text>
        </View>
    )
}

Footer.prototype = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
    navigateTo : PropTypes.string,
    navigation : PropTypes.any
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 0.6,
        borderTopColor: '#c4c4c4'
    },
    text: {
        color: '#a1a1a1',
        fontSize: 12
    },
    login: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 4
    }
})

export default React.memo(Footer)
