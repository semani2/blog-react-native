import React from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const ADD = 'add';
const EDIT = 'edit';
const DELETE = 'delete';
const GET = 'get';

const reducer = (state, action) => {
    switch (action.type) {
        case EDIT:
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id 
                    ? action.payload 
                    : blogPost
            });
        case DELETE:
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case GET:
            return action.payload;
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        try {
            await jsonServer.post('/blogposts', {
                title, 
                content
            })
    
            callback();
        }
        catch (err) {
            console.log('Add Blog Post error', e);
        }
    };
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type: DELETE, payload: id})
    };
};

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        try {
            await jsonServer.put(`/blogposts/${id}`, {
                title,
                content
            });
            dispatch({type: EDIT, payload: {id, title, content}});
            callback();
        } catch (err) {
            console.log('Edit blog post error', err);
        }
        
    };
};

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({type: GET, payload: response.data});
    };
};

export const { Context, Provider } = createDataContext(
    reducer, 
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, 
    [] );
