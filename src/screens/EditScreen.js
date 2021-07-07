import React, { useContext } from 'react'
import {StyleSheet } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ( {navigation} ) => {

    const {state, editBlogPost} = useContext(BlogContext);
    const blogPostId = navigation.getParam('id');
    const blogPost = state.find((blogPost) => blogPost.id === blogPostId);
    
    return (
        <BlogPostForm 
            onSubmit={(title, content) => {
                editBlogPost(blogPostId, title, content, () => {
                    navigation.pop();
                });
            }} 
            initialValues = {{title: blogPost.title, 
                content: blogPost.content}}/>
    );
};

const styles = StyleSheet.create({});

export default EditScreen;