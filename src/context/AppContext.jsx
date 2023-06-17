import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/posts')
            .then((res) => {
                setPosts(res.data);
            })
    }, []);

    function createPost(post) {
        axios.post('http://localhost:3001/posts', post)
            .then(() => {
                alert('Successfully inserted data');
                setPosts([...posts, post]);
            })
            .catch((err) => {
                alert(err);
            })
    }

    function editPost(postId, updatedPost) {
    axios.put(`http://localhost:3001/posts/${postId}`, updatedPost)
        .then(() => {
            alert('Successfully updated data');
            setPosts(posts.map((post) => (post.id === postId ? { ...post, ...updatedPost } : post)));
        })
        .catch((err) => {
            alert(err);
        });
    }

    function deletePost(postId) {
        axios.delete(`http://localhost:3001/posts/${postId}`)
            .then(() => {
                alert('Successfully deleted data');
                setPosts(posts.filter((post) => post.id !== postId));
            })
            .catch((err) => {
                alert(err);
            });
    }    

    return (
        <AppContext.Provider value={{ posts, setPosts, createPost, editPost, deletePost}}>
            {children}
        </AppContext.Provider>
    )
}
