import React from 'react'
import './navBar.css';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
            <nav className='navigation'>
                <Link to="/" id='heading'>Dev@Deakin</Link>
                <input id='search' type='text' placeholder='Search'></input>
                <a className='post'>Post</a>
                <Link to="/login" className='login'>Login</Link>
            </nav>
    );
}

export default NavBar