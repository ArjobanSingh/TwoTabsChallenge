import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Image, FlatList, ActivityIndicator, Dimensions} from 'react-native'

import {getFakeImages} from '../redux/action_creators'
import { connect } from 'react-redux'

const {width} = Dimensions.get('window')
const {height} = Dimensions.get('window')

function Picture(props) {

    return(
        <View>
        <Image source={{
            uri: props.uri
        }} 
        style={styles.imageStyle}/>
        </View>
    )
}

function Photos({fakeImages, getImages}) {

        useEffect(() => {
            async function fetchPictures(){
                await getImages()
            }
            fetchPictures()
        }, [])

        return (
            <View style={styles.container}>
                {fakeImages.images != null ?
                <FlatList
                    numColumns={2}
                    data={fakeImages.images}
                    renderItem={({ item }) => (
                    <Picture
                        id={item.id} 
                        uri={item.uri}
                    />
                    )}
                    keyExtractor ={item => item.id}
                    /> 
                    : fakeImages.error ?
                    <View style={styles.innerContainer}>
                        <Text>{fakeImages.err_msg}</Text> 
                    </View>
                    :
                    fakeImages.loading ?
                    <View style={styles.innerContainer}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>: undefined}
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
        width: width/2,
        height: 150,
        alignSelf: 'auto'
    }
})

const mapStateToProps = (state) => {
    return {
        fakeImages : state.fakeImages,
    }
}

export default connect(mapStateToProps, {getImages: getFakeImages})(Photos);