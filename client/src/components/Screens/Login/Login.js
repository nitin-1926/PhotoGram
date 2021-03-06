import React, {useState, useContext } from 'react';
import Cards from '../Cards/Cards';
import { addNotification } from '../../../common/commonFunctions';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Login.css';

const Login = () => {
    const { state, dispatch } = useContext(UserContext);

    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const signInUser = (emailId, password) => {
        setIsLoading(true);
        fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                emailId,
                password
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.message === 'successful') {
                    localStorage.setItem('jwt', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    dispatch({ type: 'USER', payload: data.user });
                    addNotification('loginSuccess', 'Login Successful', 'You are now logged in successfully. Hope to enjoy using our platform to the fullest', 'success');
                    history.push('/');
                } else {
                    addNotification('loginFailed', data.message, data.error, 'error');
                }
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='cardContainer'>
            <Cards isLoading={isLoading} handleSubmitButtonClick={signInUser}/>
        </div>
    )
}

export default Login
