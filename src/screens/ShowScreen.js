import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const ShowScreen = ( {navigation} ) => {
    const blogPostId = navigation.getParam('id');

    const { state } = useContext(BlogContext);

    const blogPost = state.find((post) => post.id === blogPostId );

    return <View>
       <Text>Title: {blogPost.title}</Text> 
    </View>
};

const styles = StyleSheet.create({});

export default ShowScreen;