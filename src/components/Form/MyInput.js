import React from 'react'

export const MyInput = ({ onChange, title, type, name, id, isValid }) => {
  
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputId = e.target.id
    onChange(inputValue, inputId);
  }
  
  return( 
    <div>
    {title}: <input type={type} name={name} id={id} onChange={handleChange} isValid={isValid}/>
    </div>
 )
}


