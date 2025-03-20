import React from 'react';
import './Button.css';
import { useNavigate } from 'react-router-dom';

const Button = ({ buttonName, onButtonMenuSelect, selectedMenuButton }) => {

  const navigate = useNavigate();

  const handleMenuButtonClicked = () => {
    onButtonMenuSelect(buttonName);
    if(buttonName === "Live"){
      navigate("/live");
    }
    if(buttonName === "All"){
      navigate("/");
    }
  } 

  return (
    <div className={`btn-container ${selectedMenuButton === buttonName ? 'btn-selected' : ''}`} onClick={handleMenuButtonClicked}>
        <button>{buttonName}</button>
    </div>
  )
}

export default Button