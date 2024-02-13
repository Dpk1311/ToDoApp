import React, { useEffect, useState } from "react";
import "./ToDo.css";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

const ToDo = () => {
  const [tasks, settask] = useState([]);
  useEffect(()=>{
    document.title=`You have ${tasks.length} pending task(s)` 
  })
  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    settask(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    settask(newTask);
  };
  return (
    <>
      <div className="Todoapp-container">
        <div className="header">TODO APP</div>
        <div className="Add-task">
          <AddTask addTask={addTask} />
        </div>
        <div className="tasks">
          {tasks.map((task,index) => (
            <ListTask task={task} removeTask={removeTask} index={index} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ToDo;
