import React from "react";
import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
    // NOTE: do not delete `data-cy` key value pair
  const [count,setCount] = useState(1)
  
 
const handleDecrement = (count)=>{
  if(count<2){
    setCount(1)
  }
  else{
    setCount(count-1)
  }
  
}

  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>setCount(count+1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button"  onClick={()=>handleDecrement(count)}>-</button>
    </div>
  );
};

export default Counter;
