import React from 'react';
import createDataContext from './createDataContext';

const ADD = 'add';
const EDIT = 'edit';
const DELETE = 'delete';

const reducer = (state, action) => {
    switch (action.type) {
        case ADD:
            return [...state, 
                {
                    id: `${Math.floor(Math.random() * 99999)}`,
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        case EDIT:
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id 
                    ? action.payload 
                    : blogPost
            });
        case DELETE:
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: ADD, payload: {title, content}});
        callback();
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: DELETE, payload: id})
    };
};

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({type: EDIT, payload: {id, title, content}});
        callback();
    };
};

export const { Context, Provider } = createDataContext(reducer, 
    {addBlogPost, deleteBlogPost, editBlogPost}, 
    [
        {
            id: `${Math.floor(Math.random() * 99999)}`,
            title: 'Test Post',
            content: 'Test Content'
        }
    ] );
