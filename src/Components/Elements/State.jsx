import React, { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(5)
function incrimentt()
{
    setCount (count+1)
}
function dataclear()
{
    setCount()
}
  return (
    <>
    <p>{count}</p>
    <button className='btn btn-primary'
    onClick={incrimentt}
    >+</button>
    <button className='btn btn-primary'
    onClick={dataclear}
    >clear</button>
    
    </>
  )
}

export default State