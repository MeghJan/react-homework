import { useState } from 'react';
import { Child } from '../Child/Child'

export const Parent = () => {
  const [value, setValue] = useState("");

  const handleChange = (value) => {
    setValue(value);
  };

  const onSubmit = () => {
    setValue("");
  };

  return (
    <>
      <Child value= {value} 
           handleItemChange= {(value) => {handleChange(value)}} 
           onSubmit={onSubmit}
      />
    </>
  )
}
