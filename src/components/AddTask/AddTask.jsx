import React from "react";
import styles from "./addTask.module.css";

const AddTask = (props) => {
  // NOTE: do not delete `data-cy` key value pair
 
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" value={props.addtask} type="text" placeholder="Add tasks"  onChange={(e)=>props.setaddtask(e.target.value)} />
    {
      props.addtask ? <button data-cy="add-task-button" onClick={props.handleAdd} >+</button> : <button data-cy="add-task-button" >+</button>
    }  
    </div>
  );
};

export default AddTask;
