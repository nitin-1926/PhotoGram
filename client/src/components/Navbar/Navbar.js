import React, { useState, useEffect } from 'react';
import { Layout, Button, Menu } from 'antd';
import { LoginOutlined, PlusSquareOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logoPng from '../../assets/images/logo.png';
import './Navbar.css';

const { SubMenu } = Menu;
const { Header } = Layout;

const Navbar = props => {

    return (
        <Header className='header'>
                <Link to='/'>
                    <div className='logo headerLogo' onClick={() => { console.log('Logo Clicked'); }}>
                        <img src={logoPng} alt={'PhotoGram'} height={65} width={180}/>
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
                    {/* <Menu.Item key='signUp' icon={<PlusSquareOutlined />}>
                        <Link to='/signup'>Profile</Link>
                    </Menu.Item> */}
                </Menu>
        </Header>
    );
}

export default Navbar
