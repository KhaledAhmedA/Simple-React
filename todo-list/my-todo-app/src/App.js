import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";
import Todo from "./components/Todo";

function App() {

  let [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const [todoToShow, setTodoToShow] = useState("all");

  const [toggleAllComplete, setToggleAllComplete] = useState(true);

  const updateTodoShow = (e) => {
    setTodoToShow(e);
  }

  const removeAllCompleted = () => {
    setTodos(todos.filter((todo) => !todo.complete))
  }

  // const toggleAll = () => {
  //   setTodos(todos.map((todo) => ({
  //     ...todo,
  //     complete: toggleAllComplete,

  //   })))
  //   setToggleAllComplete(!toggleAllComplete)
  // }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        } else return todo
      })
    )
  }

  if (todoToShow == 'active') {
    todos = todos.filter(todo => !todo.complete)
  } else if (todoToShow == 'complete') {
    todos = todos.filter(todo => todo.complete)
  }

  return (
    <div className="container">
      <TodoForm onSubmit={addTodo} />

      {
        todos.map((todo) => (
          <Todo key={todo.id}
            todo={todo}
            onDelete={() => { handleDelete(todo.id) }}
            toggleComplete={() => toggleComplete(todo.id)}
          />
        ))
      }

      <div>
        <button className="update-btn btn" onClick={() => updateTodoShow("all")}>All</button>
        <button className="update-btn btn" onClick={() => updateTodoShow("active")}>Active</button>
        <button className="update-btn btn" onClick={() => updateTodoShow("complete")}>Complete</button>
      </div>

      <button className="all-btn btn" onClick={removeAllCompleted}>Remove Completed</button>
      <button className="all-btn btn" onClick={() => {
        setTodos(todos.map((todo) => ({
          ...todo,
          complete: toggleAllComplete,

        })))
        setToggleAllComplete(!toggleAllComplete)
      }}>
        Mark All As Completed | {`${toggleAllComplete}`} |</button>

    </div>
  );
}

export default App;
