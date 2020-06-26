import React from 'react'

function Todo  ({ todo, toggleComplete, removeTodo })  {
console.log(todo,"todo id")


// function for togglecomplete passing in todo.id
    function handleCheck(){
        toggleComplete(todo.id)
    }

    //function for remove todo passing in todo.id
    function removeItem(){
        removeTodo(todo.id)
    }
    return (
        <div >
            <input type="checkbox" onClick={handleCheck}/>


            <li
            style={{
                // color:"red",
                // if todo.completed is true then put a line through task, if not, dont
                textDecoration: todo.completed ? "line-through" : null
            }}
            >{todo.task}</li>
            <button onClick={removeItem}>Remove</button>
        </div>
    )
}

export default Todo