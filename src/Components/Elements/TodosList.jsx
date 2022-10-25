import React,{useState} from 'react'

const TodosList = () => {

    const studentData=[
        {
            id:"2",
            name:"Haris",
            dep:"Software Engineering",
        },
        {
            id:"3",
            name:"Quaid",
            dep:"Maths",
        },
        {
            id:"4",
            name:"Adalat",
            dep:"Computer Science",
        }, 
        {
            id:"5",
            name:"Fayaz",
            dep:"IT",
        },
       
    ]

    const [data, setData] = useState(studentData)

    function clearData()
    {
        setData([]);
    }

    const removeElve =(id)=>
    {
        const newData=data.filter((v)=>{
            return v.id !=id;
        })
        setData(newData);
    }

  return (
    <div className="TodosList-section">
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 ">
                {
                    data.map((v,i)=>
                    {
                        return(
                            <>
                        <h5 className='border border-dark  rounded-5 p-3 mt-3'>Name :{v.name} id {v.id} and department: {v.dep} . 
                        <button className='btn btn-danger'
                        onClick={()=>removeElve(v.id)}
                        >Remove</button>
                        </h5>
                        <br />
                       
                        </>
                    )})
                }
                 <button className='btn btn-warning px-3 py1 rounded-5'
                 onClick={clearData}
                 >Clear</button>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    </div>
  )
}

export default TodosList