import React from 'react';
import createDataContext from './createDataContext';

const ADD = 'add';
const EDIT = 'edit';
const DELETE = 'delete';

const reducer = (state, action) => {
    switch (action.type) {
        case ADD:
            return [...state, {title: `Blog Post #${state.length + 1}`}];
        case EDIT:
            return state;
        case DELETE:
            return state;
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: ADD});
    };
};

export const { Context, Provider } = createDataContext(reducer, 
    {addBlogPost}, 
    [] );
