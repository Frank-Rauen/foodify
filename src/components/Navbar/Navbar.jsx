import React, { Fragment } from 'react';
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

const Navbar = (props) => {
    const conditionalUI = userService.getUser()
    ? <Fragment>
        <li><Link to='/restaurants'>Restaurants</Link></li>
        <li><Link to='' onClick={props.handleLogout}>Logout</Link></li>
    </Fragment>
    :
    <Fragment>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to= '/signup'>Signup</Link></li>
    </Fragment>
    return (
        <nav className={styles.navbar}>
            <Link to='/'><h1>Foodify</h1></Link>
            <ul>
                {conditionalUI}
            </ul>
        </nav>
    )
}

export default Navbar;