import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import './Home.css';

const Home = () => {

    const [posts, setPosts] = useState([]);

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

    const onPostDataChange = newPostsData => {
        setPosts(newPostsData);
    };

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
