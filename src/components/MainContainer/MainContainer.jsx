import React, { useEffect } from 'react'
import ButtonList from '../ButtonList/ButtonList'
import VideoContainer from '../VideoContainer/VideoContainer'
import './MainContainer.css';
import { useDispatch } from 'react-redux';
import { openSideBar } from '../../utils/ReduxStore/appSlice';

const MainContainer = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSideBar());
  }, []);

  return (
    <div className='main-container'>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer