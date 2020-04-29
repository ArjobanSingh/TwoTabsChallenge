import React, {useEffect} from 'react'
import {View, Text, FlatList, StyleSheet, ActivityIndicator} from 'react-native'


import {getUsersData} from '../redux/action_creators'
import { connect } from 'react-redux'

import User from './User'

function Followers({usersFinalData, getData}) {
    useEffect(() => {

        async function getUsers() {
            await getData()
        }
        getUsers();

    }, [])



    return (
        <View style={styles.container}>
            {usersFinalData.users != null ?
            <FlatList
                data={usersFinalData.users}
                renderItem={({ item }) => (
                <User
                    name={item.name}
                    username={item.username}
                    uri={item.uri}
                />
                )}
                keyExtractor ={item => item.id}
                /> 
                : usersFinalData.error ?
                <View style={styles.innerContainer}>
                    <Text>{usersFinalData.err_msg}</Text> 
                </View>
                :
                usersFinalData.loading ?
                <View style={styles.innerContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
                 : undefined}
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
    }
})

const mapStateToProps = (state) => {
    return {
        usersFinalData : state.usersData,
    }
}

// export default FollowersScreen
export default connect(mapStateToProps, {getData: getUsersData})(Followers);