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
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.message === 'successful') {
                    addNotification('signUpSuccess', 'Sign Up Successful', 'Your account has been created successfully. Hope to enjoy using our platform', 'success');
                    history.push('/login');
                } else {
                    addNotification('signUpFailed', data.message, data.error, 'error');
                }
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }

    const validateInputs = (emailId, password, name, phoneNumber) => {
        let isInvalid = false;
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailId)) {
            addNotification('invalidEmail', 'Invalid Email id', 'Please enter a valid email id to continue', 'error');
            isInvalid = true;
        }
        if (!/^[0-9]*$/.test(phoneNumber)) {
            addNotification('invalidPhone', 'Invalid Phone number', 'Please enter a valid phone number to continue', 'error');
            isInvalid = true;
        }
        if (!isInvalid) {
            signUpUser(emailId, password, name, phoneNumber);
        }
    }

    return (
        <div className='cardContainer'>
            <Cards isSignUp={true} handleSubmitButtonClick={validateInputs} isLoading={isLoading}/>
        </div>
    )
}

export default SignUp;
