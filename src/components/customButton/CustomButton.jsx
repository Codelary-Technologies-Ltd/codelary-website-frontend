import React from 'react';

function CustomButton({title, ...otherProps}) {
  return (
    <div>
        <button {...otherProps} className=" bg-yellow-700 text-white p-4 w-20 ">{title}</button>
    </div>
  )
}

export default CustomButton;