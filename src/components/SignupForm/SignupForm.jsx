import React, { Component } from 'react';
import styles from './SignupForm.module.css';

class SignupForm extends Component {
   render() {
       return (
           <form>
             <fieldset>
            <label htmlFor='name'>Full Name:</label>               
               <input id="name" name='name' type='text'/>

            <label htmlFor='email'>Email:</label>
               <input id='email' name='email' type='email'/>

            <label htmlFor='password'>Password:</label>
               <input id='password' name='password' type='password' />

            <label htmlFor='passwordConfirmation'>Confirm Password:</label>
               <input id='passwordConfirmation' name='passwordConfirmation' type='password' />

               <button type='submit'>Submit</button>
            </fieldset>
           </form>
       )
   }
}

export default SignupForm;