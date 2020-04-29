import React from 'react'

// in app imports
import FollowersScreen from './screens/FollowersScreen'
import PhotosScreen from './screens/PhotosScreen'

// third party imports
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Tab = createMaterialTopTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator style={{marginTop: Constants.statusBarHeight}}>
      <Tab.Screen name="Followers" component={FollowersScreen} />
      <Tab.Screen name="Photos" component={PhotosScreen} />
    </Tab.Navigator>
  )
}

function MainApp() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>

    )
}

export default MainApp;