import React, {useState} from 'react';
import { Card, Input, Button } from 'antd';
import { UserOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Cards.css';


const Cards = props => {
    const [name, setName] = useState(null);
    const [emailId, setEmailId] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Card
            title='PhotoGram'
            hoverable
            className='detailsCard'
            headStyle={{ fontSize: '35px', fontFamily: 'Grand Hotel, cursive' }}
        >
            <Input
                placeholder='Enter Email'
                value={emailId}
                size='large'
                prefix={<UserOutlined />}
                onChange={e => setEmailId(e.target.value)}
            />
            {props.isSignUp && <Input
                placeholder='Enter Name'
                value={name}
                onChange={e => setName(e.target.value)}
                size='large'
                className='input'
                prefix={<UserOutlined />}
            />}
            {props.isSignUp && <Input
                placeholder='Enter Phone Number'
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                size='large'
                className='input'
                prefix={<PhoneOutlined />}
            />}
            <Input.Password
                placeholder='Enter Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                size='large'
                className='input'
                prefix={<LockOutlined />}
            />
            {props.isSignUp && <Input.Password
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                size='large'
                className='input'
                prefix={<LockOutlined />}
            />}
            <div className='buttonDiv'>
                <Button
                    type='primary'
                    size='large'
                    className='actionButton'
                    onClick={() => props.handleSubmitButtonClick(emailId, password, name, phoneNumber)}
                >
                    {props.isSignUp ? 'Sign Up' : 'Login'}
                </Button>
                {props.isSignUp ? <Link to='/login'>
                        Already have an account? Login!
                    </Link> : <Link to='/signup'>
                        Don't have an account? Sign Up!
                </Link>}
            </div>
        </Card>
    )
}

export default Cards;
