import React from 'react'
import {View, StyleSheet} from 'react-native'


import Photos from '../Components/Pictures'

function PhotosScreen() {
    return (
        <View style={styles.container}>
            <Photos />
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
      flex: 1,
    },
    innerContainer :{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle:{
        height: 200,
        width: 400,
    }
})


export default PhotosScreen;