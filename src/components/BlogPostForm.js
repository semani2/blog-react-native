import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import AutoExpandingTextInput from './AutoExpandingTextInput';

const BlogPostForm = ( {onSubmit, initialValues} ) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Title:</Text>
            <AutoExpandingTextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>

            <Text style={styles.label}>Enter Content:</Text>
            <AutoExpandingTextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
        
            <Button 
                title="Save"
                onPress={() => { onSubmit(title, content) }}/>
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
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

export default BlogPostForm;