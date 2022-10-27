import React from 'react';

function CustomButton({title, ...otherProps}) {
  return (
    <div>
        <button {...otherProps} className=" bg-yellow-700 text-white p-3 w-50 ">{title}</button>
    </div>
  )
}

export default CustomButton;