import React, { useState } from 'react'
import { useEffect } from 'react';

function RightWayUseEffect() {
    const [count, setCount]=useState(0);

    useEffect(() => {
        console.log(" executed in mounting phase");  
        return() =>{
            console.log("component is unmounted");
        }
    },[]);// mounting phase similar to component did mount
  

    useEffect(() => {
        if(count!==0){
        console.log(" update executed"); 
        }  
    },[count]);


    return (
    <div>
    <h1> count-{count}</h1>
    <button 
    onClick={() => {
        setCount(count+1);
    }}
    >
        click
    </button>
      
    </div>
  )
}

export default RightWayUseEffect;
