Step 1: 
Create main state. This can be in main component.
const [todos, setTodos] = useState([])
This will be an array of todos.
This component will also need to return the todo form and todo list.

Step 2: Create a input form. 

It needs state to hold the input value.
const [todoInput, setTodoInput] = useState({
        id:"",
        task:"",
        completed:false
    })

it needs an input to type into.
      <input
            type="text"
            name="task"
            value={todoInput.task}
            onChange={handleChange}
                        
            />

It needs a handleChange to connect the inputed typed text to the state.

 function handleChange(event) {
        setTodoInput({...todoInput, task: event.target.value})
    }

It needs a submit button

Step 3:
Map over todos



