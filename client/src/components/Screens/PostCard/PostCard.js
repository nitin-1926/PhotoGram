import React, { useEffect, useState} from 'react';
import { Card, Avatar, Input  } from 'antd';
import { HeartFilled, SmileOutlined } from '@ant-design/icons';
import './PostCard.css';

const { Meta } = Card;

const PostCard = props => {

    const [posts, setPosts] = useState([]);

    // <img alt='profile' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' className='titleImage'></img>

    // src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'

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
        posts.map(postData => (
            <Card
                hoverable
                className='mainCard'
                bodyStyle={{ padding: '12px 0px 0px' }}
            >
                <Meta className='cardHeader' avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />} title={postData.postedBy.name} />
                <div className='postImageDiv'>
                    <img alt='post' className='postImage' src={postData.photoUrl} />
                </div>
                <div className='cardActionsDiv'>
                    <div className='cardActionsIconsDiv'>
                        <HeartFilled className='cardActionsIcon'/>
                    </div>
                    <div className='cardActionsCaptionDiv'>
                        <span className='cardActionsUsername'>{postData.postedBy.emailId}</span>
                        <span className='cardActionsCaption'>{ postData.caption }</span>
                    </div>
                </div>
                <div className='cardActionsInput'><Input className='cardActionsCommentInput' size='large' placeholder='Add a comment' prefix={<SmileOutlined />} /></div>
            </Card>
        ))
    );
};

export default PostCard;
