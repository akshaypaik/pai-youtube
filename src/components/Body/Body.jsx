import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import MainContainer from '../MainContainer/MainContainer';
import './Body.css';
import { useSelector } from 'react-redux';

const Body = () => {

    const showSideBar = useSelector((store) => store.header.showSideBar);

    return (
        <div className='body-container'>
            {showSideBar && <Sidebar />}
            <MainContainer />
        </div>
    )
}

export default Body