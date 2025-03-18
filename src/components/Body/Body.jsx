import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import MainContainer from '../MainContainer/MainContainer';
import './Body.css';

const Body = () => {
  return (
    <div className='body-container'>
        <Sidebar />
        <MainContainer />
    </div>
  )
}

export default Body