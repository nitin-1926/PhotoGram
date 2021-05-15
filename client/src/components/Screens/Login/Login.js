import React, {useState} from 'react';
import Cards from '../Cards/Cards';
import { addNotification } from '../../../common/commonFunctions';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const signInUser = (emailId, password) => {
        setIsLoading(true);
        console.log(emailId, password);
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
