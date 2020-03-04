import React from 'react';
import styles from './Restaurants.module.css';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';

const Restaurants = (props => {
    return (
        <main>
            <h1>Restaurants</h1>
            <RestaurantForm
            {...props} />
        </main>
    )
})

export default Restaurants;