import React, { useState } from "react";

function TodoForm(props) {
//   const [data, setData] = useState({
//     // id: "",
//     // task: "",
//     // completed: "",
//   });
const [data, setData] = useState({
    task:''
});
function handleChanges(e) {
    setData({ ...data, task: e.target.value });
  }

  function submitTodo(e) {
    e.preventDefault();

    props.addTodo(data.task);
    //   props.setTodo({ ...form, task: "" });
  }

  return (
    <div>
      <form onSubmit={submitTodo}>
        <input
          type="text"
          name="task"
          onChange={handleChanges}
          value={data.task}
        />
        <button type="submit">Submit</button>
      </form>
      <h1>{data.task}</h1>
    </div>
  );
}

export default TodoForm;
