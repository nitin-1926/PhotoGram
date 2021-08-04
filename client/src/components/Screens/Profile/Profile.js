import React, { useEffect, useState, useContext } from 'react';
import PostCard from '../PostCard/PostCard';
import { UserContext } from '../../../App';
import './Profile.css';

const Profile = () => {

    const [userPosts, setUserPosts] = useState([]);
    const {state, dispatch} = useContext(UserContext);
    useEffect(() => {
        fetch('myPosts', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        }).then(res => res.json())
            .then(data => {
                console.log('Data: ', data);
                setUserPosts(data.posts);
            });
    }, []);

    return (
        <div style={{maxWidth: '80%', margin: '0px auto'}}>
            <div style={{display: 'flex', justifyContent: 'space-around', margin: '18px 0px', borderBottom: '1px solid grey'}}>
                <div>
                    <img style={{ width: '160px', height: '160px', borderRadius: '80px' }} alt='Profile Pic'
                        src='https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                    />
                </div>
                <div>
                    <h1>{ state && state.name}</h1>
                    <div style={{display: 'flex', justifyContent: 'space-around', width: '108%'}}>
                        <h5>{userPosts ? userPosts.length : 'No available'} posts</h5>
                        <h5>77 followers</h5>
                        <h5>77 following</h5>
                    </div>
                </div>
            </div>

            <PostCard
                posts={userPosts}
                bodyStyle={{padding: '12px 0px 0px'}}
                imageHeight={'250px'}
                isProfilePage={true}
            />
        </div>
    )
}

export default Profile
