import React, {useState} from 'react';
import Cards from '../Cards/Cards';
import { addNotification } from '../../../common/commonFunctions';
import { useHistory } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {

    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const signUpUser = (emailId, password, name, phoneNumber) => {
        setIsLoading(true);
        console.log(emailId, password, name, phoneNumber);
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                emailId,
                password,
                phoneNumber
            })
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.message === 'successful') {
                addNotification('signUpSuccess', 'Sign Up Successful', 'Your account has been created successfully. Hope to enjoy using our platform', 'success');
                history.push('/login');
            } else {
                addNotification('signUpFailed', data.message, data.error, 'error');
            }
            setIsLoading(false);
        });
    }

    return (
        <div className='cardContainer'>
            <Cards isSignUp={true} handleSubmitButtonClick={signUpUser} isLoading={isLoading}/>
        </div>
    )
}

export default SignUp;
