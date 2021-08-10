import React, { useEffect, useState } from 'react';
import PostList from './PostList';

const getBlogs = async () => {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',{
            headers: {
                'Content-Type': 'application/json'
            },
        }
    );
    return response.json();
}

const Blog = () => {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        // Fetch posts
        getBlogs().then((blogs) => {
            setPosts([...blogs]);
        }).catch((error) => {
            console.log('error---', error);
        })
    }, []);

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return <div>
        {posts.length > 0 ? <PostList posts={posts} /> : 'Loading...'}
    </div>
}

export default Blog;