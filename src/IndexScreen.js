import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from './context/BlogContext'
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {

    const {state, addBlogPost, deleteBlogPost} = useContext(BlogContext);

    return (
    <View>
        <Button title="Add Post" onPress={addBlogPost} />
        <FlatList 
            data={state}
            keyExtractor={(blogPost) => blogPost.id}
            renderItem={( {item} ) => {
                console.log(item);
                return <View style={styles.row}>
                        <Text style={styles.title}>{item.title}</Text>
                        <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                            <Feather
                                style={styles.icon} 
                                name="trash" 
                                size={24} 
                                color="black" />
                        </TouchableOpacity>
                        
                    </View>
                    
            }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderTopWidth: 0.5,
        borderTopColor: 'grey'
    },
    title: {
        fontSize: 18
    },
    icon: {
        margin: 0
    }
});

export default IndexScreen;