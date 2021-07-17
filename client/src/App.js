import React, { useEffect, createContext, useReducer, useContext } from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Screens/Home/Home';
import Login from './components/Screens/Login/Login';
import SignUp from './components/Screens/SignUp/SignUp';
import Profile from './components/Screens/Profile/Profile';
import CreatePost from './components/Screens/CreatePost/CreatePost';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import {reducer, initialState} from './reducer/userReducer';
import './App.css';
import 'antd/dist/antd.css';

export const UserContext = createContext();

const Routing = () => {
	const history = useHistory();
	const { state, dispatch} = useContext(UserContext);
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			dispatch({ type: 'USER', payload: user });
			history.push('/');
		} else {
			history.push('/login');
		}
	}, []);
	
	return (
		<Switch>
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
			<CreatePost />
		</Route>
		</Switch>
	);
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { Content } = Layout;
	return (
		<div className='App'>
		<UserContext.Provider value={{state, dispatch}}>
			<BrowserRouter>
				<Layout className='body'>
				
				<Navbar />
				<Content className='content'>

				<Routing />
					
				</Content>

				</Layout>
			</BrowserRouter>
		</UserContext.Provider>
		</div>
	)
}

export default App;
