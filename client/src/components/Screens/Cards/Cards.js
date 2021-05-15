import React, {useState} from 'react';
import { Card, Input, Button } from 'antd';
import { UserOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Cards.css';


const Cards = props => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Card
            title='PhotoGram'
            hoverable
            className='detailsCard'
            headStyle={{ fontSize: '35px', fontFamily: 'Grand Hotel, cursive' }}
        >
            <Input size='large' placeholder='Enter Email' prefix={<UserOutlined />} />
            {props.isSignUp && <Input size='large' placeholder='Enter Name' className='input' prefix={<UserOutlined />} />}
            {props.isSignUp && <Input size='large' placeholder='Enter Phone Number' className='input' prefix={<PhoneOutlined />} />}
            <Input.Password size='large' placeholder='Enter Password' className='input' prefix={<LockOutlined />} />
            {props.isSignUp && <Input.Password size='large' placeholder='Confirm Password' className='input' prefix={<LockOutlined />} />}
            <div className='buttonDiv'>
                <Button type='primary' size='large' className='actionButton' loading={isLoading}>{props.isSignUp ? 'Sign Up' : 'Login'}</Button>
                {props.isSignUp ? <Link to='/login'>Already have an account? Login!</Link> : <Link to='/signup'>Don't have an account? Sign Up!</Link>}
            </div>
        </Card>
    )
}

export default Cards;
