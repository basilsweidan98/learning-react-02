import React, { useState } from 'react';


function Todo(props) {

  
  const [name, setName]=useState('Basil');
    const [age, setAge]=useState(24);

    const handleClick = () => {
    setName('Moataz');
    setAge(30);
    }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <p>{name} is {age}</p>
      <div className='actions'>
      <button className='btn' onClick={handleClick}>Click me </button>

      </div>
      <div className='actions'>
        <button className='btn'> Cancel </button>
      </div>
    
      
    </div>
  );
}

export default Todo;