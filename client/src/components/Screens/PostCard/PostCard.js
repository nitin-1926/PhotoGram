import React, { useState, useContext } from 'react';
import {
    Card,
    Avatar,
    Input,
} from 'antd';
import {
    HeartOutlined,
    HeartFilled,
    SmileOutlined,
} from '@ant-design/icons';
import { UserContext } from '../../../App';
import './PostCard.css';

const { Meta } = Card;

const PostCard = ({
    posts,
    bodyStyle,
    imageHeight,
    isProfilePage,
    onPostDataChange
}) => {

    const [comment, setComment] = useState(null);
    const { state, dispatch } = useContext(UserContext);

    const updatePostsLikes = newPostData => {
        const updatedPosts = posts.map(postData => {
            if (postData._id === newPostData._id) {
                postData.likedBy = newPostData.likedBy;
            }
            return postData;
        });
        onPostDataChange(updatedPosts);
    };

    const updatePostsComments = newPostData => {
        const updatedPosts = posts.map(postData => {
            if (postData._id === newPostData._id) {
                postData.comments = newPostData.comments;
            }
            return postData;
        });
        onPostDataChange(updatedPosts);
    };

    const likePost = id => {
        fetch('likePost', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
            .then(newPostData => {
                updatePostsLikes(newPostData);
            });
    };

    const unlikePost = id => {
        fetch('unlikePost', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
            .then(newPostData => {
                updatePostsLikes(newPostData);
            });
    };

    const addComment = id => {
        fetch('addComment', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                postId: id,
                commentText: comment
            })
        }).then(res => res.json())
            .then(newPostData => {
                updatePostsComments(newPostData);
            });
    };
    
    return <div className={isProfilePage ? 'gallery' : 'mainHomeDiv'}>
        {posts && posts.length > 0 && posts.map(postData => {
        return <Card
            hoverable
            className={`${isProfilePage ? 'profileCard' : 'mainCard'}`}
            bodyStyle={bodyStyle}
        >
            <Meta className='cardHeader' avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />} title={postData.postedBy.name} />
            <div className='postImageDiv' style={{ height: imageHeight }}>
                <img alt='post' className='postImage' src={postData.photoUrl} />
            </div>
            <div className='cardActionsDiv'>
                <div className='cardActionsIconsDiv'>
                    {
                        postData.likedBy && postData.likedBy.includes(state._id) ? <HeartFilled
                            style={{fontSize: '25px', color: 'red'}}
                            onClick={() => unlikePost(postData._id)}
                        /> : <HeartOutlined
                            style={{fontSize: '25px', color: 'black'}}
                            onClick={() => likePost(postData._id)}
                        />
                    }
                    <span className='numberOfLikes'>
                        { postData.likedBy ? postData.likedBy.length : 0 } likes
                    </span>
                </div>
                <div className='cardActionsCaptionDiv'>
                    <span className='cardActionsUsername'>{postData.postedBy.emailId}</span>
                    <span className='cardActionsCaption'>{postData.caption}</span>
                </div>
            </div>
            <div className='cardActionsInput'>
                <Input
                    value={comment}
                    className='cardActionsCommentInput'
                    size='large'
                    placeholder='Add a comment'
                    prefix={<SmileOutlined />}
                    onChange={e => {
                        e.preventDefault();
                        const text = e.target.value;
                        setComment(text);
                    }}
                    onPressEnter={() => addComment(postData._id)}
                />
            </div>
        </Card>
    })}
    </div>
};

export default PostCard;
