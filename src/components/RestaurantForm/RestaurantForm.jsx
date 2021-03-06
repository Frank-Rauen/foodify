import React, { Component } from 'react';
import styles from './RestaurantForm.module.css';
import userService from '../../utils/userService';
import restaurantService from '../../utils/restaurantService';

class RestaurantForm extends Component {
   
    state = this.getInitialState();

    getInitialState() {
        return {
        title: '',
        cuisine: '',
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
            const {title, cuisine} =  this.state;
            const addedBy = userService.getUser()._id
            await restaurantService.create({title, cuisine, addedBy})
            
            this.setState(this.getInitialState(), () => {
                this.props.handleGetRestaurants();
                this.props.history.push('/restaurants');
            });

        } catch (error) {
            this.setState({
                title: '',
                cuisine: '',
                error: error.message
            })
        }
        

    }

    isFormValid = evt => {
        return(
        this.state.title && this.state.cuisine
        )}
   
    render() {
       return (
           <section className={styles.section}>
               {
                   this.state.error && <p>{this.state.error}</p>
               }
             <form onSubmit={this.handleSubmit}>
             <fieldset>
                 <legend>New Restaurant Form</legend>


            <label htmlFor='title'>Title:</label>
               <input 
               id='title' 
               name='title' 
               type='title' 
               value={this.state.title}
               onChange={this.handleChange}/>
               

            <label htmlFor='cuisine'>Cuisine:</label>
               <input id='cuisine' 
               name='cuisine' 
               type='cuisine' 
               value={this.state.cuisine}
               onChange={this.handleChange}/>


               <button disabled={!this.isFormValid()} type='submit'>Add Restaurant</button>
            </fieldset>
           </form>
        </section>
       )
   }
}

export default RestaurantForm;