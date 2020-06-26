import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

function TodoHook() {
  const [todos, setTodos] = useState([]);


  function addTodo(newTodo) {
    // adds new todo to end of todos array
    setTodos([...todos, newTodo]);
  }

  function toggleComplete(id) {
    //set todos
    setTodos(
      //map through todos, for every todo who's id matches the id clicked on,
      //return everything from the todo except do the opposite of what completed is
      todos.map((todo) => {
        if (todo.task === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  //setTodos to if the todo.id does not equal the id selected then show it.
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <div>Todo Hook </div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default TodoHook;
