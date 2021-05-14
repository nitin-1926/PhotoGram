import React from 'react';
import { Card, Avatar } from 'antd';
import { HeartFilled, WechatFilled } from '@ant-design/icons';
import './PostCard.css';

const { Meta } = Card;

const PostCard = props => {

    // <img alt='profile' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' className='titleImage'></img>

    // src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'

    return (
        <Card
            hoverable
            className='mainCard'
            bodyStyle={{padding: '24px 0px'}}
        >
            <Meta className='cardHeader' avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />} title='Europe Street beat' />
            <div className='postImageDiv'>
                <img alt='post' className='postImage' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />
            </div>
            <div className='cardActionsDiv'>
                <div className='cardActionsIconsDiv'>
                    <HeartFilled />
                    <WechatFilled />
                </div>
                <div>gupta7nitin</div>
            </div>
        </Card>
    );
};

export default PostCard;
