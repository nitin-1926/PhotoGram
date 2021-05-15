import React from 'react';
import Cards from '../Cards/Cards';
import './SignUp.css';

const SignUp = () => {

    const signUpUser = (emailId, password, name, phoneNumber) => {
        console.log(emailId, password, name, phoneNumber);
    }

    return (
        <div className='cardContainer'>
            <Cards isSignUp={true} handleSubmitButtonClick={signUpUser}/>
        </div>
    )
}

export default SignUp;
