import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });
function App() {
  const [Tasks, setTasks] = useState(TASKS)
  const [Categories, setCategories] = useState("All")

  function handleTasks(newTasks) {
    setTasks([...Tasks, newTasks])
  }

  function handleDeleteTask(deletedTaskText) {
    setTasks(Tasks.filter((Task) => Task.text !== deletedTaskText));
  }

  const visibleTasks = Tasks.filter(
    (Task) => Categories === "All" || Task.Categories === Categories
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories = {CATEGORIES} 
      selectedCategory={Categories}
      onSelectCategory={setCategories}
      />
      <NewTaskForm 
      categories={CATEGORIES.filter((cat) => cat !== "All")}
      onTaskFormSubmit={handleTasks}
      />
      <TaskList tasks = {visibleTasks} onDeleteTask = {handleDeleteTask} />
    </div>
  );
}

export default App;
