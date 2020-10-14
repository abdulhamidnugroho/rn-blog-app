import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
    
    return <BlogPostForm />;
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginHorizontal: 5
    }
})

export default EditScreen;