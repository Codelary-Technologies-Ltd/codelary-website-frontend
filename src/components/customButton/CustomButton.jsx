import React from 'react';
import './CustomButton.css';

function CustomButton({title, ...otherProps}) {
  return (
    <div>
        <button {...otherProps}>{title}</button>
    </div>
  )
}

export default CustomButton;