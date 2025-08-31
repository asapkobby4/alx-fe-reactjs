// src/App.jsx
import React from "react";
import TodoList from "./components/TodoList"; // ✅ relative path

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
