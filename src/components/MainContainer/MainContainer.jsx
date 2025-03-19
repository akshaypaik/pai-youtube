import React from 'react'
import ButtonList from '../ButtonList/ButtonList'
import VideoContainer from '../VideoContainer/VideoContainer'
import './MainContainer.css';

const MainContainer = () => {
  return (
    <div className='main-container'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer