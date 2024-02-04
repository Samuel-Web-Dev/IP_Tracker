import React from 'react';
import { FaGreaterThan } from "react-icons/fa";

function InputField({ handleChange, name, value, handleSubmit }) {
  return (
    <> 
       <h1>IP Address Tracker</h1>
        <div className='input_field'>
        <input 
        type="text"
        placeholder='Search for any IP address or domain'
        onChange={handleChange}
        name={name}
        value={value} />
        <div className="icons" onClick={handleSubmit}>
        <FaGreaterThan className='search_icon' />
        </div>
        </div>
    </>
  )
}

export default InputField