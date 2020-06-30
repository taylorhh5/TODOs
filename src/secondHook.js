import React, {useState, useEffect} from 'react'

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

  
    function removeTodo(idFromButton) {
        setTodos(todos.filter((todo) => todo.id !== idFromButton));
      }


      function checkComplete(id){
          setTodos(
              todos.map((todo) =>{
                  if (todo.id ==id){
                      return{
                          ...todo,
                          completed: !todo.completed,
                      }
                  }
                  return todo;
              })
          )
      }
function clearCompleted(){
    setTodos(todos.filter((todo => !todo.completed)))
}

    
    return (
        <div>
            <h1>Second todo hook</h1>

            <button onClick={clearCompleted}>Clear Completed</button>
            
            <input
            type="text"
            name="task"
            value={todoInput.task}
            onChange={handleChange}
            
            
            />
            {/* <h1>Input{todoInput.task}</h1> */}
            <button onClick={addTodo}>Add Todo</button>

            {todos.map((item) =>{
                return <div>
                    <input type="checkbox" onClick={(e) => checkComplete (item.id)}/>
                    <h1 key={item.id} style={{textDecoration:item.completed ? "line-through" : null}}>{item.task} </h1>
                <button onClick={(e) => removeTodo(item.id)}>Delete</button>
                {/* <button onClick={ removeItem}>Delete</button> */}

                </div>
            }) }

        </div>
    )
}

export default SecondHook