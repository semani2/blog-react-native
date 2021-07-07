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
                    id: Math.floor(Math.random() * 99999),
                    title: `Blog Post #${state.length + 1}`
                }
            ];
        case EDIT:
            return state;
        case DELETE:
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: ADD});
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: DELETE, payload: id})
    };
};

export const { Context, Provider } = createDataContext(reducer, 
    {addBlogPost, deleteBlogPost}, 
    [] );
