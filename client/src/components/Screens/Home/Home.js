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

    return (
        <div className='mainHomeDiv'>
            {posts.length > 0 && posts.map((postData) => {
                return <PostCard
                    bodyStyle={{padding: '12px 0px 0px'}}
                    title={postData.postedBy.name}
                    photoUrl={postData.photoUrl}
                    userId={postData.postedBy.emailId}
                    caption={postData.caption}
                    imageHeight={'280px'}
                />
            })}
        </div>
        
    );
};

export default Home;
