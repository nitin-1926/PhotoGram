import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import './Home.css';

const Home = () => {

    const [posts, setPosts] = useState([]);

    const onPostDataChange = newPostsData => {
        setPosts(newPostsData);
    };

    useEffect(() => {
        fetch('allPosts', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        }).then(res => res.json())
            .then(data => {
                console.log('Data: ', data);
                setPosts(data.posts);
            });
    }, []);

    return (
        <PostCard
            posts={posts}
            bodyStyle={{padding: '12px 0px 0px'}}
            imageHeight={'280px'}
            onPostDataChange={onPostDataChange}
        />
    );
};

export default Home;
