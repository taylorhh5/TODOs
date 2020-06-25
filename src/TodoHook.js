import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

const TodoHook = () => {
  //state
  const [todos, setTodos] = useState([]);

  //takes in a todo and adds it to array of todos
  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }


  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  return (
    <div>
      <h1>Todo Hook List</h1>
      {/* <h1>{todos}</h1> */}
      {/* pass addTodo function to TodoForm as a prop */}
      <TodoForm addTodo={addTodo} />

      {/* pass todos state as props to TodosList */}
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
};

export default TodoHook;
