import React, { useState, useEffect } from "react";
import "./index.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Load todos from localStorage on initial mount
  useEffect(() => {
    const storedTodos = localStorage.getItem("todoList");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to localStorage
  const handleSaveTodos = () => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  };

  // Add new todo
  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      alert("Enter valid input.");
      return;
    }

    const newTodo = {
      text: inputValue,
      uniqueId: Date.now(), // More reliable than length+1
      isChecked: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
  };

  // Toggle todo check status
  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.uniqueId === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.uniqueId !== id));
  };

  return (
    <div className="todos-bg-container">
      <div className="container">
        <h1 className="todos-heading">Todos</h1>

        <h1 className="create-task-heading">
          Create <span className="create-task-heading-subpart">Task</span>
        </h1>

        <input
          type="text"
          className="todo-user-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button className="add-todo-button" onClick={handleAddTodo}>
          Add
        </button>

        <h1 className="todo-items-heading">
          My <span className="todo-items-heading-subpart">Tasks</span>
        </h1>

        <ul className="todo-items-container">
          {todos.map((todo) => (
            <li
              key={todo.uniqueId}
              className="todo-item-container"
              id={`todo${todo.uniqueId}`}
            >
              <input
                type="checkbox"
                id={`checkbox${todo.uniqueId}`}
                className="checkbox-input"
                checked={todo.isChecked}
                onChange={() => handleToggleTodo(todo.uniqueId)}
              />
              <div className="label-container">
                <label
                  htmlFor={`checkbox${todo.uniqueId}`}
                  id={`label${todo.uniqueId}`}
                  className={`checkbox-label ${
                    todo.isChecked ? "checked" : ""
                  }`}
                >
                  {todo.text}
                </label>
                <i
                  className="far fa-trash-alt delete-icon"
                  onClick={() => handleDeleteTodo(todo.uniqueId)}
                ></i>
              </div>
            </li>
          ))}
        </ul>

        <button className="add-todo-button" onClick={handleSaveTodos}>
          Save
        </button>
      </div>
    </div>
  );
}

export default TodoApp;
