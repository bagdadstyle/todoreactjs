import React from "react";
import "../Styles.css/Tasks.css";
import { AiOutlineDelete } from "react-icons/ai";

function Tasks({ id, text, complete, taskComplete, deleteTask }) {
  return (
    <div className={complete ? "task-container complete" : "task-container"}>
      <div className="task-text" 
      onClick={() => taskComplete(id)}>{text}</div>
      <div className="task-icon" 
      onClick={()=> deleteTask(id)} >
        <AiOutlineDelete className="task-icon"/>
      </div>
    </div>
  );
}

export default Tasks;
