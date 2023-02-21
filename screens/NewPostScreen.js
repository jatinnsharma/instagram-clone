import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import AddNewPost from '../components/newPost.js/AddNewPost';

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:'black',flex:1}}>
        <AddNewPost/>
    </SafeAreaView>
  )
}

export default NewPostScreen