import React from 'react';

function CustomInput({placeholder, type, ...otherProps}) {
  return (
    <div>
        <input {...otherProps} placeholder={placeholder} required type={type} className=" w-1/2 p-2 border-2 border-yellow-700 "/>
    </div>
  )
}

export default CustomInput;