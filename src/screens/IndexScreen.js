import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';

const IndexScreen = ( {navigation} ) => {

    const {state, deleteBlogPost} = useContext(BlogContext);

    return (
    <View>
        <FlatList 
            data={state}
            keyExtractor={(blogPost) => blogPost.id}
            renderItem={( {item} ) => {
                console.log(item);
                return <TouchableOpacity 
                        onPress={() => navigation.navigate('Show', {id: item.id})}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title}</Text>
                        <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                            <Feather
                                style={styles.icon} 
                                name="trash" 
                                size={24} 
                                color="black" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            }}
        />
    </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather style={{ marginEnd: 10 }} name="plus" size={30} />
          </TouchableOpacity>
        ),
      };
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