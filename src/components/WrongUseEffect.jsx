import React, { useState } from 'react'

function WrongUseEffect() {
    const [count, setCount]=useState(0);
    useState(() =>{
        console.log("useeffect executed");
    });// wrong usage

    const increment=()=>{
        setCount(count+1);
    };
  return (
    <div>
      <p> count={count}</p>
      <button onClick={increment}> click</button>
    </div>
  );
}

export default WrongUseEffect;
