// src/App.jsx
import React from "react";
import TodoList from "./components/TodoList"; // ✅ Add this import

function App() {
  return (
    <div>
      <h1>My Todo App</h1>
      <TodoList /> {/* ✅ Add the component here */}
    </div>
  );
}

export default App;
