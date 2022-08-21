import React from "react";
import "./App.css";
// import Tasks from './components/Tasks'
import TaskList from './components/TaskList';
import FormTask from "./components/FormTask";
// import logo from './images/logo.svg';

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <h1 className="logo">To-Do List</h1>
      </div>
      <div className="main-tasks">
        <h2>My Tasks</h2>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
