import React from 'react';
import styles from './Button.module.css';

const Button = ({ size, label }) => {
  const buttonSize = size === 'large' ? styles.large : styles.small;

  return (
    <div>
      <button className={`${styles.button} ${buttonSize}`}>{label}</button>
    </div>
  );
};

export default Button;
