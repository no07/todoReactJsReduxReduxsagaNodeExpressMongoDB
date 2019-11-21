import React from 'react';
import '../assets/App.css';
import TodoList from "../containers/TodoList"

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <hr></hr>
      <TodoList/>
    </div>
  );
}

export default App;
