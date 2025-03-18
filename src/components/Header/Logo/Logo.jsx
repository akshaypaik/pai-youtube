import React from 'react';
import './Logo.css';

const Logo = () => {
    return (
        <div className='logo-container'>
            <img alt='youtube-logo' src='https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png' />
            <p style={{color: 'white', cursor: 'pointer'}}>Youtube</p>
        </div>
    )
}

export default Logo