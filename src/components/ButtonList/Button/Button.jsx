import React from 'react';
import './Button.css';

const Button = ({ buttonName }) => {
  return (
    <div className='btn-container'>
        <button>{buttonName}</button>
    </div>
  )
}

export default Button