import React, { Component } from 'react';
import styles from './LoginForm.module.css';
import userService from '../../utils/userService';

class LoginForm extends Component {
   
    state = { 
        email: '',
        password: ''
    };

    getInitialState() {
        return {
        email: '',
        password: '',
        error: ''
        }
    }

    handleChange = evt => {
        this.setState({
            error: '',
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = async evt => {
        evt.preventDefault();
        if(!this.isFormValid()) return;
        try {
            const {email, password} =  this.state;

            await userService.login({email, password});
            this.setState(this.getInitialState(), () => {
                
                this.props.handleSignupOrLogin();
                this.props.history.push('/restaurants');
            });

        } catch (error) {
            this.setState({
                email: '',
                password: '',
                error: error.message
            })
        }
        

    }

    isFormValid = evt => {
        return(
        this.state.email && this.state.password
        )}
   
    render() {
       return (
           <section className={styles.section}>
               {
                   this.state.error && <p>{this.state.error}</p>
               }
             <form onSubmit={this.handleSubmit}>
             <fieldset>
                 <legend>Login Form</legend>


            <label htmlFor='email'>Email:</label>
               <input 
               id='email' 
               name='email' 
               type='email' 
               value={this.state.email}
               onChange={this.handleChange}/>
               

            <label htmlFor='password'>Password:</label>
               <input id='password' 
               name='password' 
               type='password' 
               value={this.state.password}
               onChange={this.handleChange}/>


               <button disabled={!this.isFormValid()} type='submit'>Submit</button>
            </fieldset>
           </form>
        </section>
       )
   }
}

export default LoginForm;