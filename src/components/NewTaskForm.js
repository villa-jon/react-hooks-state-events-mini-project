import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState("");
  const [category, setCategories] = useState("Code")
  
  function handleSubmit(w) {
    w.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategories("Code");
  }

  return (
    <form className="new-task-form"  onSubmit = {handleSubmit}>
      <label>
        Details
        <input type="text" 
        name="text" 
        value={text}
        onChange={(w) => setText(w.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category"value={category} onChange={(w) => setCategories(w.target.value)}>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
