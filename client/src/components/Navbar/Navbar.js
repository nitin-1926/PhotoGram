import React, { useState, useContext } from 'react';
import { Layout, Menu } from 'antd';
import {
    LoginOutlined,
    PlusSquareOutlined,
    UserOutlined,
    AppstoreAddOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import logoPng from '../../assets/images/logo.png';
import { UserContext } from '../../App';
import './Navbar.css';

const { Header } = Layout;

const navbarLinks = [
    {
        label: 'Login',
        route: '/login',
        icon: <LoginOutlined />,
        key: 'login',
        isVisibleAfterLogin: false
    },
    {
        label: 'Sign up',
        route: '/signup',
        icon: <PlusSquareOutlined />,
        key: 'signup',
        isVisibleAfterLogin: false
    },
    {
        label: 'Profile',
        route: '/profile',
        icon: <UserOutlined />,
        key: 'profile',
        isVisibleAfterLogin: true
    },
    {
        label: 'Create post',
        route: '/createPost',
        icon: <AppstoreAddOutlined />,
        key: 'createPost',
        isVisibleAfterLogin: true
    },
    {
        label: 'Logout',
        route: '/login',
        icon: <LogoutOutlined />,
        key: 'logout',
        isVisibleAfterLogin: true
    }
];

const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();
    const [currentKey, setCurrentKey] = useState('');

    const handleClick = e => {
        if (e.key === 'logout') {
            localStorage.clear();
            dispatch({ type: 'CLEAR' });
        } else {
            setCurrentKey(e.key);
        }
    };

    const linksToDisplay = state ? navbarLinks.filter(linkData => linkData.isVisibleAfterLogin) : navbarLinks.filter(linkData => !linkData.isVisibleAfterLogin);

    return (
        <Header className='header'>
            <Link to={state ? '/' : '/login'}>
                <div className='headerLogo' onClick={() => {
                    setCurrentKey('');
                }}>
                    <img src={logoPng} alt={'PhotoGram'} className='logo'/>
                </div>
            </Link>
            <Menu mode='horizontal' onClick={handleClick} selectedKeys={[currentKey]}>
                {linksToDisplay.map(linkData => {
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
