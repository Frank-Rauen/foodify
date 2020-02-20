import React, { Component } from 'react';
import styles from './LoginForm.module.css';

class LoginForm extends Component {
   
    state = { 
        email: '',
        password: ''
    };

    getInitialState() {
        return {
        email: '',
        password: ''
        }
    }

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.setState(this.getInitialState());
    }
   
    render() {
       return (
           <form onSubmit={this.handleSubmit} className={styles.form}>
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


               <button type='submit'>Submit</button>
            </fieldset>
           </form>
       )
   }
}

export default LoginForm;