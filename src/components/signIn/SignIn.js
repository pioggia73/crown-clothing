import React, { Component } from 'react';
import './signIn.styles.scss';
// ***** components ***** //
import FormInput from '../../components/form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


 class SignIn extends Component {
    constructor(){
      super()

      this.state = {
         email: '',
         password: ''
      }
   };

   handleSubmit = async (event) => {
      event.preventDefault()
      const {email, password} = this.state;
      try {
         await auth.signInWithEmailAndPassword(email, password)
         this.setState({email: '', password: '' })
      }
      catch (error) {
         console.log(error)
      }
   };

   handleChange = (event) => {
      const {value, name} = event.target ;
      this.setState({[name]: value})
   };
   
   render() {
      return (
         <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
               <FormInput 
                  name='email'
                  type='email'
                  value={this.state.email}
                  label='email'
                  handleChange={this.handleChange}
                  required
               />
               
               <FormInput 
                  name='password'
                  type='password'
                  value={this.state.password}
                  label='password'
                  handleChange={this.handleChange}
                  required
               />
               <div className='buttons'>
               <CustomButton type='submit'>Sign In</CustomButton> 
               <CustomButton 
                  onClick={signInWithGoogle}
                  isGoogleSignIn
                  >
                  sign in with Google
               </CustomButton>
               </div>
            </form>
         </div>
      )
   }
};

export default SignIn;