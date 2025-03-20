import React, { useEffect } from 'react'
import ButtonList from '../ButtonList/ButtonList'
import './MainContainer.css';
import { useDispatch } from 'react-redux';
import { openSideBar } from '../../utils/ReduxStore/appSlice';
import { Outlet } from 'react-router-dom';

const MainContainer = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSideBar());
  }, []);

  return (
    <div className='main-container'>
      <ButtonList />
      <Outlet />
    </div>
  )
}

export default MainContainer