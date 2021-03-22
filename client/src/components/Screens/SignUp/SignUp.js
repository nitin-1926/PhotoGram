import React from 'react';
import Cards from '../Cards/Cards';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='cardContainer'>
            <Cards isSignUp={true} />
        </div>
    )
}

export default SignUp;
