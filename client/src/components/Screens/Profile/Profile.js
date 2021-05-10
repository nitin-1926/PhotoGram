import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div style={{maxWidth: '70%', margin: '0px auto'}}>
            <div style={{display: 'flex', justifyContent: 'space-around', margin: '18px 0px', borderBottom: '1px solid grey'}}>
                <div>
                    <img style={{ width: '160px', height: '160px', borderRadius: '80px' }} alt='Profile Pic'
                        src='https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                    />
                </div>
                <div>
                    <h1>Nitin Gupta</h1>
                    <div style={{display: 'flex', justifyContent: 'space-around', width: '108%'}}>
                        <h5>77 posts</h5>
                        <h5>77 followers</h5>
                        <h5>77 following</h5>
                    </div>
                </div>
            </div>

            <div className='gallery'>
                <img alt='Profile Pics' className='galleryPhotos'
                    src='https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                />
                <img alt='Profile Pics' className='galleryPhotos'
                    src='https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                />
                <img alt='Profile Pics' className='galleryPhotos'
                    src='https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                />
                <img alt='Profile Pics' className='galleryPhotos'
                    src='https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                />
                <img alt='Profile Pics' className='galleryPhotos'
                    src='https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                />
                <img alt='Profile Pics' className='galleryPhotos'
                    src='https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                />
            </div>
        </div>
    )
}

export default Profile
