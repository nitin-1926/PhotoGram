import React, {useState} from 'react';
import { Card, Input, Button } from 'antd';
import { UserOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons';
import './Cards.css';


const Cards = props => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Card title='PhotoGram' hoverable className='detailsCard' headStyle={{ fontSize: '35px', fontFamily: 'Grand Hotel, cursive' }}>
            <Input size='large' placeholder='Enter Email' prefix={<UserOutlined />} />
            {props.isSignUp && <Input size='large' placeholder='Enter Name' className='input' prefix={<UserOutlined />} />}
            {props.isSignUp && <Input size='large' placeholder='Enter Phone Number' className='input' prefix={<PhoneOutlined />} />}
            <Input.Password size='large' placeholder='Enter Password' className='input' prefix={<LockOutlined />} />
            {props.isSignUp && <Input.Password size='large' placeholder='Confirm Password' className='input' prefix={<LockOutlined />} />}
            <Button type='primary' size='large' className='actionButton' loading={isLoading}>{props.isSignUp ? 'Sign Up' : 'Login'}</Button>
        </Card>
    )
}

export default Cards;
