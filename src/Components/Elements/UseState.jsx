import React, { useState } from "react";

const UseState = () => {
  var reactInterneedata = [
    {
      id: 1,
      name: "shah Faisal",
      age: 40,
    },
    {
      id: 2,
      name: "Abbass",
      age: 40,
    },
    {
      id: 3,
      name: "umer",
      age: 40,
    },
    {
      id: 4,
      name: "Hamza",
      age: 30,
    },
  ];
  const [data, setData] = useState(reactInterneedata);

  function clearData() {
    setData=[];
  }

  return (
    <>  
    <hr />
    {
        data.map((value)=><h1>Name:{value.name}</h1>)
    }
            <button onClick={clearData} className="btn btn-primary ">
              Clear
            </button>
        
      
    </>
  );
};

export default UseState;
