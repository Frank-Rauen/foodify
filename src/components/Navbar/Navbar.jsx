import React from 'react';
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={styles.navbar}>
            <Link to='/'><h1>Foodify</h1></Link>
            <ul>
                <Link to='/restaurants'><li>Restaurants</li></Link>
                <li>Login</li>
                <li>Signup</li>

            </ul>
        </nav>
    )
}

export default Navbar;