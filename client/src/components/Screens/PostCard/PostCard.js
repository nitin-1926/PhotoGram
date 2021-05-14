import React from 'react';
import { Card } from 'antd';
import './PostCard.css';

const { Meta } = Card;

const PostCard = props => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    );
};

export default PostCard;
