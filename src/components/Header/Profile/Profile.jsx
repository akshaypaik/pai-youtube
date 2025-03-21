import React from 'react';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../../utils/ReduxStore/appSlice';

const Profile = () => {

    const dispatch = useDispatch();
    const darkMode = useSelector((store) => store.app.darkMode);

    const handleDarkMode = () => {
        dispatch(toggleDarkMode());
    }

    return (
        <div className='profile-container'>
            <button className='create-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" fill={darkMode ? 'white' : 'black'} enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ display: 'inherit', height: '18px' }}><path d="M20 12h-8v8h-1v-8H3v-1h8V3h1v8h8v1z"></path></svg>
                Create
            </button>
            <img alt='avatar' src='https://yt3.ggpht.com/yti/ANjgQV-zFt1B7XeQ598f8NF8stTz2kpJxymy-MZrvbuK56PTAr9K=s88-c-k-c0x00ffffff-no-rj' />
            <div className='dark-mode-container' onClick={handleDarkMode}>
                {darkMode ?
                    <svg fill={darkMode ? 'white' : 'black'} height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true" style={{ display: 'inherit' }}>
                        <path d="M12 22C10.93 22 9.86998 21.83 8.83998 21.48L7.41998 21.01L8.83998 20.54C12.53 19.31 15 15.88 15 12C15 8.12 12.53 4.69 8.83998 3.47L7.41998 2.99L8.83998 2.52C9.86998 2.17 10.93 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM10.58 20.89C11.05 20.96 11.53 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C11.53 3 11.05 3.04 10.58 3.11C13.88 4.81 16 8.21 16 12C16 15.79 13.88 19.19 10.58 20.89Z"></path>
                    </svg> :
                    <svg height="42" viewBox="0 0 28 28" fill="white">
                        <circle cx="14" cy="14" r="3.5" stroke="black"></circle>
                        <path d="M14 8.5V6.5" stroke="black" stroke-linecap="round"></path><path d="M17.889 10.1115L19.3032 8.69727" stroke="black" stroke-linecap="round"></path><path d="M19.5 14L21.5 14" stroke="black" stroke-linecap="round"></path><path d="M17.889 17.8885L19.3032 19.3027" stroke="black" stroke-linecap="round"></path><path d="M14 21.5V19.5" stroke="black" stroke-linecap="round"></path><path d="M8.69663 19.3029L10.1108 17.8887" stroke="black" stroke-linecap="round"></path><path d="M6.5 14L8.5 14" stroke="black" stroke-linecap="round"></path><path d="M8.69663 8.69711L10.1108 10.1113" stroke="black" stroke-linecap="round"></path>
                    </svg>
                }
            </div>
        </div>
    )
}

export default Profile