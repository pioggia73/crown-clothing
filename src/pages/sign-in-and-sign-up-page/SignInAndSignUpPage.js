import React from 'react';
import './signInAndSignUpPage.styles.scss'
// ****** components ***** //
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';

const SignInAndSignUpPage = () => {
   return (
      <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
      </div>
   )
}

export default SignInAndSignUpPage;
