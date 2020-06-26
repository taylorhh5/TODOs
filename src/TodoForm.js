import React, { useState } from "react";

function TodoForm({addTodo}) {


//initial todo object
const [todoForm, setTodoForm] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
  //spread in all of todoForm plus add the task from e.target.value
    setTodoForm({ ...todoForm, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh

    //if statement makes sure it will only submit if task typed in
    if (todoForm.task) {
        //spread in everything from todoForm form and add the date
      addTodo({ ...todoForm, id:Date.now() });
      //then reset the form
      setTodoForm({ ...todoForm, task: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        value={todoForm.task}
        onChange={handleTaskInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
