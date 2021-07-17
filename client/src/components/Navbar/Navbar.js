import React, { useState, useEffect, useContext } from 'react';
import { Layout, Menu } from 'antd';
import { LoginOutlined, PlusSquareOutlined, UserOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logoPng from '../../assets/images/logo.png';
import { UserContext } from '../../App';
import './Navbar.css';

const { Header } = Layout;

const navbarLinks = [
    {
        label: 'Login',
        route: '/login',
        icon: <LoginOutlined className='navbarMenuIcon'/>,
        key: 'login',
        isVisibleOnLogin: false
    },
    {
        label: 'Sign up',
        route: '/signup',
        icon: <PlusSquareOutlined className='navbarMenuIcon'/>,
        key: 'signup',
        isVisibleOnLogin: false
    },
    {
        label: 'Profile',
        route: '/profile',
        icon: <UserOutlined className='navbarMenuIcon'/>,
        key: 'profile',
        isVisibleOnLogin: true
    },
    {
        label: 'Create post',
        route: '/createPost',
        icon: <AppstoreAddOutlined className='navbarMenuIcon'/>,
        key: 'createPost',
        isVisibleOnLogin: true
    },
];

const Navbar = props => {
    const { state, dispatch } = useContext(UserContext);

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
                    {navbarLinks.map(linkData => {
                        return (
                            <Menu.Item className='navbarMenuItem' key={linkData.key} icon={linkData.icon}>
                                <Link to={linkData.route}>{ linkData.label }</Link>
                            </Menu.Item>
                        );
                    })}
                </Menu>
        </Header>
    );
}

export default Navbar
