import React, { useState } from "react";

const Test = () => {
  const [value, setvalue] = useState(false);

 

  return (
    <div>
      <button onClick={()=> setvalue(!value)}>{value ? "Logout" : "Login"}</button>
      <p>{value ? "Please  Logout" : "Please Login "}</p>
    </div>
  );
};

export default Test;
