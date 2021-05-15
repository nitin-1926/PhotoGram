import React from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Screens/Home/Home';
import Login from './components/Screens/Login/Login';
import SignUp from './components/Screens/SignUp/SignUp';
import Profile from './components/Screens/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';

const App = () => {

  const { Content } = Layout;
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout className='body'>
          
          <Navbar />
          <Content className='content'>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/signup'>
            <SignUp />
          </Route>

          <Route path='/profile'>
            <Profile />
          </Route>

          <Route path='/createPost'>
            <Home />
          </Route>
            
          </Content>

        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App;
