import React from 'react';
import { Card, Avatar, Input  } from 'antd';
import { HeartFilled, SmileOutlined } from '@ant-design/icons';
import './PostCard.css';

const { Meta } = Card;

const PostCard = props => {

    // <img alt='profile' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' className='titleImage'></img>

    // src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'

    return (
        <Card
            hoverable
            className='mainCard'
            bodyStyle={{padding: '12px 0px 0px'}}
        >
            <Meta className='cardHeader' avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />} title='gupta7nitin' />
            <div className='postImageDiv'>
                <img alt='post' className='postImage' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />
            </div>
            <div className='cardActionsDiv'>
                <div className='cardActionsIconsDiv'>
                    <HeartFilled className='cardActionsIcon'/>
                </div>
                <div className='cardActionsCaptionDiv'>
                    <span className='cardActionsUsername'>gupta7nitin</span>
                    <span className='cardActionsCaption'>Here goes caption of the photo</span>
                </div>
            </div>
            <div className='cardActionsInput'><Input className='cardActionsCommentInput' size='large' placeholder='Add a comment' prefix={<SmileOutlined />} /></div>
        </Card>
    );
};

export default PostCard;
