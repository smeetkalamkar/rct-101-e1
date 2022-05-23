import React from "react";
import AddTask from "./AddTask/AddTask";
import tasks from "../data/tasks.json"
import { useState } from "react";
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [addtask,setaddtask] = useState("")
  const [taskList,settaskList] = useState(tasks)

  const handleAdd = () =>{
    const payload = {
      id:Date.now(),
      text:addtask,
      done:false,
      count:1
  }
  settaskList([...taskList,payload]);
  setaddtask("")
  }

  const onDelete = (id)=>{
    let updatedTodos = taskList.filter((todo)=>{
      return todo.id!==id
    })

    settaskList(updatedTodos)
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
       <TaskHeader/>
      {/* Add Task */}
        <AddTask setaddtask={setaddtask} handleAdd={handleAdd} addtask={addtask} />
      {/* Tasks */}
        <Tasks taskList={taskList} onDelete={onDelete} />
    </div>
  );
};

export default TaskApp;
