import React from 'react';
import './child.css'


export const Child = ({value, handleItemChange, onSubmit}) => {
  return (
    <>
    <div className='section'>
      <h2>Welcome to React JS for beginners course.</h2>
      <h3>Please enter your name.</h3>
      <input className='input' onChange={(e) => handleItemChange(e.target.value)} />
      <button onClick={onSubmit}>Submit</button>
    </div>
    </>
  )
}
