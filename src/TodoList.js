import React from 'react'
import Todo from './Todo.js'


    const TodoList = (props) => {
// console.log(props,"props in list")
        return (
    
            <div className ="list">

              {/* map over todos state from App.js
              and pass it to Todo Component  */}
                {props.todos.map(todo => (
                    <Todo key={todo.id} todo={todo} toggleComplete={props.toggleComplete}/>
                ))}
    
    
    
    
            </div>
    
        )
    }

export default TodoList