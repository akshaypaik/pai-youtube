import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to={"/"}>
            <div className='logo-container'>
                <img alt='youtube-logo' src='https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png' />
                <p style={{ cursor: 'pointer' }}>Pai Youtube</p>
            </div>
        </Link>
    )
}

export default Logo