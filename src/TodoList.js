import React from "react";
import Todo from "./Todo.js";

function TodoList({ todos, toggleComplete, removeTodo }) {
    return (
      <div>
          {/* map over todos and display them in Todo component */}
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
        </div>
    );
  }
  

export default TodoList;
