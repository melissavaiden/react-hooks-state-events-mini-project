import React from "react";
import Task from "./Task";

function TaskList({tasks, deleteTask}) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task deleteTask={deleteTask} key={task.text} category={task.category} text={task.text}/>
      ))}
    </div>
  );
}

export default TaskList;
