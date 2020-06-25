import React from 'react'

const Todo = (props) => {


    function handleCheck(){
        props.toggleComplete(props.todo.id)
    }
    return (
        <div >
            <input type="checkbox" onClick={handleCheck}/>


            <li
            style={{
                color:"red",
                textDecoration: props.todo.completed ? "line-through" : null
            }}
            >{props.todo}</li>
            <button>x</button>
        </div>
    )
}

export default Todo