import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code")

  function handleSubmit(w) {
    w.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" 
    onSubmit = {handleSubmit}
    >
      <label>
        Details
        <input type="text" 
        value = {text}
        onChange={(w) => setText(w.target.value)}
        />
      </label>
      <label>
        Category
        <select 
        value={category}
        onChange={(w) => setCategory(w.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input 
      type="submit" 
      value="Add task" />
    </form>
  );
}

export default NewTaskForm;
