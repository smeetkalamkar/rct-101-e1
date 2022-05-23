import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 5;
  let unCompletedTask = 3;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      You have <b data-cy="header-remaining-task">{unCompletedTask}</b> of {" "}
        <b data-cy="header-total-task">{totalTask}</b> tasks remaining
    </div>
  );
};

export default TaskHeader;
