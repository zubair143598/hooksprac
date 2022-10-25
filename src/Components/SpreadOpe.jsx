import React,{useState} from "react";

const SpreadOpe = () => {

    
  const [myData, setMyData] = useState(
    {
        name: "Zubair",
        works: "internee",
        degree: "BS in software Engineering",
      }
  );
  function update()
  {
    setMyData({...myData,name:"Muhammad Zubair"})
  }
  return (
    <div className="container text-center">
        <hr />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6  ">
        
            <h1>Name: {myData.name} i work as a {myData.works} in Relymer and my degree is {myData.degree}</h1>
            <button className="btn btn-primary"
            onClick={update}
            >Update</button>
        </div>
        <div className="col-md-3"></div>

      </div>
    </div>
  );
};

export default SpreadOpe;
