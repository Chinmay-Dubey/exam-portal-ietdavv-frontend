import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateButton = ({ route, title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div>
      <button onClick={handleClick}>{title}</button>
    </div>
  );
};

export default NavigateButton;
