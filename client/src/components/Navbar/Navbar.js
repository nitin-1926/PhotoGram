import React, { useState, useEffect } from 'react';
import { Layout, Button } from 'antd';
import { LoginOutlined, PlusSquareOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logoPng from '../../assets/images/logo-removebg-preview.png';
import './Navbar.css';

const Navbar = props => {
    const { Header } = Layout;

    return (
        <Header className='header'>
            <Link to='/'>
                <div className='logo headerLogo' onClick={() => { console.log('Logo Clicked'); }}>
                    <img src={logoPng} alt={'PhotoGram'} height={65} width={180}/>
                </div>
            </Link>
            <div>
                <Link to='/login'><Button size='large' type='primary' icon={<LoginOutlined />} className='headerButton'>Login</Button></Link>
                <Link to='/signup'><Button size='large' type='primary' icon={<PlusSquareOutlined />} className='headerButton'>Sign Up</Button></Link>
                <Link to='/profile'><Button size='large' type='primary' icon={<UserOutlined />} className='headerButton'>Profile</Button></Link>
            </div>
        </Header>
    );
}

export default Navbar
