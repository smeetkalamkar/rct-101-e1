import React from "react";
import styles from "./task.module.css";
import { Counter } from "../Counter";
import { useState } from "react";
const Task = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  const [isCompleted,setisCompleted] = useState(props.task.done)

 
  return (
    <li data-cy="task" className={styles.task}>
      

      <input type="checkbox" data-cy="task-checkbox"  className="iy" checked={isCompleted} 
      onChange= {(e)=>{
        setisCompleted(e.target.checked)
      }}
      />
     {
       isCompleted?<p className={styles.striked}>{props.task.text}</p>:<p>{props.task.text}</p>
     } 
      <div data-cy="task-text"></div>
      <div className="counter">{/* Counter here */ <Counter/>}</div>
      <button data-cy="task-remove-button" className="del" onClick={()=>props.onDelete(props.task.id)}>x</button>
    
    </li>
  );
};

export default Task;
