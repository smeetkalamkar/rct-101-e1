import React from "react";
import styles from "./tasks.module.css";
import TaskApp from "../TaskApp";
import Task from "../Task/Task";

const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  
  return (
    <div className="tasks-div-smeet">
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {
          props.taskList.map((task)=>{
            return <Task task={task}  onDelete={props.onDelete}/>
          })
        }
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        
      </div>
    </div>
  );
};

export default Tasks;
