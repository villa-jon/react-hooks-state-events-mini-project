import React from "react";
import Task from "./Task"

function TaskList({ tasks, onDeleteTask }) {
  const tasksthing = tasks.map((task) => 
  <Task 
  key = {task.text}
  text = {task.text}
  categories = {task.categories}
  onDeleteTask = {onDeleteTask}
  />
  ) 
  return (
    <div className="tasks">
     {tasksthing}
    </div>
  );
}

export default TaskList;
