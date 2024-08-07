import React from 'react'
import './navBar.css';

const NavBar = () => {
    return (
            <nav className='navigation'>
                <a id='heading'>Dev@Deakin</a>
                <input id='search' type='text' placeholder='Search'></input>
                <a className='post'>Post</a>
                <a className='login'>Login</a>
            </nav>
    );
}

export default NavBar