import React, { useState, useEffect } from 'react';
import { Layout, Button } from 'antd';
import { LoginOutlined, PlusSquareOutlined, UserOutlined } from '@ant-design/icons';
import logoPng from '../../assets/images/logo-removebg-preview.png';
import './Navbar.css';

const Navbar = props => {
    const { Header } = Layout;

    return (
        <Header className='header'>
            <div className='logo headerLogo' onClick={() => { console.log('Logo Clicked'); }}>
                <img src={logoPng} alt={'PhotoGram'} height={65} width={180}/>
            </div>
            <div>
                <Button size='large' type='primary' icon={<LoginOutlined />} className='headerButton'>Login</Button>
                <Button size='large' type='primary' icon={<PlusSquareOutlined />} className='headerButton'>Sign Up</Button>
                <Button size='large' type='primary' icon={<UserOutlined />} className='headerButton'>Profile</Button>
            </div>
        </Header>
        /* <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            Content
        </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */
    );
}

export default Navbar
