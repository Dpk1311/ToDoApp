import React, { useState } from "react";

const AddTask = ({addTask}) => {
    const [value,setvalue] = useState("")

    const additem = ()=>{
        addTask(value)
        setvalue("")
    }
  return (
    <>
      <div className="input-container">
        <input type="text" className="input" placeholder="Add task here" value={value}
        onChange={(e)=> {setvalue(e.target.value)}}
        ></input>
        <button onClick={additem} className="add-btn">ADD</button>
      </div>
    </>
  );
};

export default AddTask;
