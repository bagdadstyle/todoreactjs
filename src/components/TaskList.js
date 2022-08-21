import React, { useState } from "react";
import FormTask from "./FormTask";
import Tasks from '../components/Tasks'
import '../Styles.css/TaskList.css';

function TaskList() {

    const [ tasks, setTasks ] = useState([]);

    const addTask = (task) =>{
      console.log(task)
      if(task.text.trim()){
        task.text = task.text.trim();
        const taskUpdate = [task, ...tasks];
        setTasks(taskUpdate);
      }
    }
    const deleteTask = (id) =>{
      console.log(id)
      const tasksUpdated = tasks.filter(t => t.id !== id)
      setTasks(tasksUpdated); 
    }
    const taskComplete = (id) =>{
        const tasksUpdated = tasks.map(task =>{
          if(task.id === id){
            task.complete = !task.complete
          }
          return task;
        })
        setTasks(tasksUpdated);
    };

  return (
    <>
      <FormTask onSubmit={addTask}/>
      <div className="task-containerList">TaskList
        {
          tasks.map(task =>{
            return(
              <Tasks 
              key={task.id}
              id={task.id}
              text={task.text}
              complete={task.complete}
              taskComplete={taskComplete}
              deleteTask={deleteTask}
              />
            )
          })
        }
      </div>
    </>
  );
}

export default TaskList;
