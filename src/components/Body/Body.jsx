import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Body.css';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Body = () => {

    const showSideBar = useSelector((store) => store.app.showSideBar);
    const darkMode = useSelector((store) => store.app.darkMode);

    return (
        <>
            <Header />
            <div className={darkMode ? 'body-container dark-mode' : 'body-container'}>
                {showSideBar && <Sidebar />}
                <Outlet />
            </div>
        </>
    )
}

export default Body