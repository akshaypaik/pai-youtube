import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className='profile-container'>
            <button className='create-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" fill='white' enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ display: 'inherit', height: '100%' }}><path d="M20 12h-8v8h-1v-8H3v-1h8V3h1v8h8v1z"></path></svg>
                Create
            </button>
            <img alt='avatar' src='https://yt3.ggpht.com/yti/ANjgQV-zFt1B7XeQ598f8NF8stTz2kpJxymy-MZrvbuK56PTAr9K=s88-c-k-c0x00ffffff-no-rj' />
        </div>
    )
}

export default Profile