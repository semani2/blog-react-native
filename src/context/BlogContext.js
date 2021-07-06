import React, {useState, useReducer} from 'react';

const BlogContext = React.createContext();

const ADD = 'add';
const EDIT = 'edit';
const DELETE = 'delete';

const reducer = (state, action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case EDIT:
            return state;
        case DELETE:
            return state;
        default:
            return state;
    }
};

export const BlogProvider = ({ children }) => {

    const [blogPosts, dispatch] = useReducer(reducer, []);

    const addBlogPost = () => {
        dispatch({type: ADD, payload: {title: `Blog Post #${blogPosts.length + 1}`}})
    };
    

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;
