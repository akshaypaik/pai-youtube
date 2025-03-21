import { useState } from 'react';
import './Header.css';
import Logo from './Logo/Logo';
import Profile from './Profile/Profile';
import Searchbar from './Searchbar/Searchbar';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideBar } from '../../utils/ReduxStore/appSlice';

const Header = () => {

    const dispatch = useDispatch();
    const darkMode = useSelector((store) => store.app.darkMode);

    const handleToggleSideBar = () => {
        dispatch(toggleSideBar());
    }

    return (
        <div className={darkMode ? 'header-container dark-mode' : 'header-container'}>
            <div className='menu-logo-container'>
                <svg onClick={handleToggleSideBar} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ display: 'inherit', height: '100%' }}>
                    <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z" fill={darkMode ? 'white' : 'black'}></path>
                </svg>
                <Logo />
            </div>
            <Searchbar />
            <Profile />
        </div>
    )
}

export default Header;