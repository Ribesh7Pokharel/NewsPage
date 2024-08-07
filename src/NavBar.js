import React from 'react'
import './navBar.css';

const NavBar = () => {
    return (
        <div className='navBar'>
            <nav>
                <a id='Heading'>Dev@Deakin</a>
                <a><input id='Search' type='text' placeholder='Search'></input></a>
                <a className='post'>Post</a>
                <a className='login'>Login</a>
            </nav>
        </div>
    );
}

export default NavBar