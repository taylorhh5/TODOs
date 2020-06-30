import React, {useState} from 'react'

const SecondHook = () => {

    const [todos, setTodos] = useState([])

    const [todoInput, setTodoInput] = useState({
        id:Date.now(),
        task:"",
        completed:false
    })
console.log(todos,"todos")
    function handleChange(event) {
        setTodoInput({...todoInput, task: event.target.value, id:Date.now()})
    }


    // function handleSubmit(event){
    //     event.preventDefault();

    //     if (todoInput) {
    //         addTodo({...todoInput, id:Date.now()})
    //         setTodoInput({...todoInput, task:""})
    //     }
    // }

    function addTodo(){
        if(todoInput){

            setTodos([...todos, todoInput ])
            setTodoInput({...todoInput, task:""})
        }

        // setTodos([...todos, inputedTodo]);
    }

    return (
        <div>
            <h1>Second todo hook</h1>
            
            <input
            type="text"
            name="task"
            value={todoInput.task}
            onChange={handleChange}
            
            
            />
            {/* <h1>Input{todoInput.task}</h1> */}
            <button onClick={addTodo}>Add Todo</button>

            {todos.map((item) =>{
                return <p key={item.id}>{item.task}</p>
            })}
        </div>
    )
}

export default SecondHook