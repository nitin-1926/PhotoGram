import React, { useState, useEffect } from 'react';
import { Layout, Button, Menu } from 'antd';
import { LoginOutlined, PlusSquareOutlined, UserOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logoPng from '../../assets/images/logo.png';
import './Navbar.css';

const { SubMenu } = Menu;
const { Header } = Layout;

const Navbar = props => {

    return (
        <Header className='header'>
                <Link to='/'>
                    <div className='headerLogo' onClick={() => { console.log('Logo Clicked'); }}>
                        <img src={logoPng} alt={'PhotoGram'} className='logo'/>
                    </div>
                </Link>
                <Menu mode='horizontal' defaultSelectedKeys={['2']}>
                    <Menu.Item key='login' icon={<LoginOutlined />}>
                        <Link to='/login'>Login</Link>
                    </Menu.Item>
                    <Menu.Item key='signUp' icon={<PlusSquareOutlined />}>
                        <Link to='/signup'>Sign Up</Link>
                    </Menu.Item>
                    <Menu.Item key='profile' icon={<UserOutlined />}>
                        <Link to='/profile'>Profile</Link>
                    </Menu.Item>
                    <Menu.Item key='createPost' icon={<AppstoreAddOutlined />}>
                        <Link to='/createPost'>Create Post</Link>
                    </Menu.Item>
                </Menu>
        </Header>
    );
}

export default Navbar
