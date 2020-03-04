import React, {useState} from 'react';
import styles from './Restaurants.module.css';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';

const Restaurants = (props => {
    const [formVisible, setVisibility] = useState(false);
    return (
        <main>
            <h1>Restaurants</h1>
            <button onClick = {() => setVisibility(!formVisible)}>
                {formVisible ? 'Hide Form' : 'Show Form'}
            </button>
            {
                formVisible &&
                <RestaurantForm {...props} />
            }
            {
                props.restaurants.map(({title, _id, cuisine, addedBy}, idx) => (
                     <section key={idx}>
                     <h1>Restaurant: {title}</h1>
                        <p>Cuisine: {cuisine}</p>
                <small>Added by: {addedBy.name}</small>
                     </section>
                ))
            }
            
            
        </main>
    )
})

export default Restaurants;