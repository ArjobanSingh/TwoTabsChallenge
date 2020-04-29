import React from 'react';
import {
  SafeAreaView,
    View,
    Image,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

function User(props) {

    const buttonClicked = () => {
        alert(`Follower name is ${props.name}`)
    }

    return (
        
        <SafeAreaView style={styles.container}>
            <Image source={{
                uri: props.uri
            }} 
            style={styles.imageStyle}/>
            <View style={styles.nameStyle}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.username}>{props.username}</Text>
            </View>
            <TouchableHighlight
                onPress={buttonClicked}
                style = {styles.btnStyle}>
                    <Text style={styles.plusSign}>+</Text>
            </TouchableHighlight>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: 'white',
        height: 65,
        padding: 10    
    },
    nameStyle: {
        flexDirection: "column"
    },
    imageStyle :{
        width: 50, height: 50, borderRadius: 50
    },
    btnStyle:{
        position: 'absolute',
        right: 10,
        top: '40%',
        backgroundColor: '#45b3e0',
        borderRadius: 50,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    plusSign:{
        fontSize: 20,
        color: 'white'
    },
    name:{
        marginHorizontal: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    username :{
        marginHorizontal: 10,
        marginTop: 5,
        fontSize: 14 
    }
})

export default User;