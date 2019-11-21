import React, { useRef } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Post from './Post'
import StoryContainer from '../components/StoryContainer'

const PostsContainer = () => {

    var a = [1, 2, 3, 4, 5, 6, 10, 7, 1256, 545, 6878, 13151, 8749, 31313, 6846846, 13135418484, 3151568, 87494, 45, 52288, 50, 46, 87, 58, 99, 9663, 56456, 54]
 
    const renderItem = ({ item, index }) => index == 0 ? <StoryContainer /> : <Post postData={{ media: 'https://r1---sn-4g5edn7y.googlevideo.com/videoplayback?expire=1574362309&ei=ZYjWXeuhIcThiwTkxpqYDg&ip=181.215.203.27&id=o-ANvQdd38ENKc5IbhHCYhBwMIlJi6pBfBj4COZrKZ0TFz&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=17458172&ratebypass=yes&dur=644.957&lmt=1558351470447184&fvip=1&fexp=23842630&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgAh8CPTWwgisUpHh6mVxqsESPvyVGGO9BMpTNai-oRR8CIDRk7FMOsscyqZpzU1GnXs-5KY8IlIpur6DsyOJcPJUa&title=React%20Hooks%20Tutorial%20-%202%20-%20useState%20Hook&cm2rm=sn-bavc5aoxuuo-u0oe7e,sn-hpas77e&req_id=6d49bac868eba3ee&redirect_counter=2&cms_redirect=yes&mip=197.15.76.169&mm=34&mn=sn-4g5edn7y&ms=ltu&mt=1574340814&mv=m&mvi=0&pl=19&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRgIhALsB-OhUCnp4NKobAh_u6Gyc23RrRsoikM4nP2hy2xR7AiEAmc5VaGHgJQqpOgjUihGlsW2OHJsRexL8npXtAJgCTH8=', type: 'video' }} />
    return (
        <View style={styles.container}>
            <FlatList
                data={a}
                renderItem={renderItem}
                keyExtractor={(item) => `${item}`}
                showsVerticalScrollIndicator={false}
                initialNumToRender={2}
                style={{ width: '100%', height: 600 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    listStyle: {
        width: '100%',
        alignSelf: 'center'
    }
})

export default React.memo(PostsContainer)
