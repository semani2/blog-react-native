import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, TextInput } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const EditScreen = ( {navigation} ) => {

    const {state, addBlogPost} = useContext(BlogContext);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
    
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>

            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
        
            <Button title="Save" onPress={() => { 
                addBlogPost(title, content, () => {
                    navigation.navigate('Index');
                });
                }
            }/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 0.5,
        borderColor: 'grey',
        marginBottom: 15,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
    
    },
    container: {
        margin: 10
    }
});

export default EditScreen;