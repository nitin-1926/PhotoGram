import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { LoginOutlined, PlusSquareOutlined, UserOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logoPng from '../../assets/images/logo.png';
import './Navbar.css';

const { Header } = Layout;

const Navbar = props => {

    const [currentKey, setCurrentKey] = useState('');

    const handleClick = e => {
        setCurrentKey(e.key);
    };

    return (
        <Header className='header'>
                <Link to='/'>
                <div className='headerLogo' onClick={() => {
                    setCurrentKey('');
                }}>
                        <img src={logoPng} alt={'PhotoGram'} className='logo'/>
                    </div>
                </Link>
                <Menu mode='horizontal' onClick={handleClick} selectedKeys={[currentKey]}>
                    <Menu.Item className='navbarMenuItem' key='login' icon={<LoginOutlined className='navbarMenuIcon'/>}>
                        <Link to='/login'>Login</Link>
                    </Menu.Item>
                    <Menu.Item className='navbarMenuItem' key='signUp' icon={<PlusSquareOutlined className='navbarMenuIcon'/>}>
                        <Link to='/signup'>Sign Up</Link>
                    </Menu.Item>
                    <Menu.Item className='navbarMenuItem' key='profile' icon={<UserOutlined className='navbarMenuIcon'/>}>
                        <Link to='/profile'>Profile</Link>
                    </Menu.Item>
                    <Menu.Item className='navbarMenuItem' key='createPost' icon={<AppstoreAddOutlined className='navbarMenuIcon'/>}>
                        <Link to='/createPost'>Create Post</Link>
                    </Menu.Item>
                </Menu>
        </Header>
    );
}

export default Navbar
