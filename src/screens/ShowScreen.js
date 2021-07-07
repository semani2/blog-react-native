import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'; 

const ShowScreen = ( {navigation} ) => {
    const blogPostId = navigation.getParam('id');

    const { state } = useContext(BlogContext);

    const blogPost = state.find((post) => post.id === blogPostId );

    return <View>
       <Text>{blogPost.title}</Text> 
       <Text>{blogPost.content}</Text>
    </View>
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={35} />
          </TouchableOpacity>
        ),
      };
}

const styles = StyleSheet.create({});

export default ShowScreen;