import React, { useState } from 'react'

const Advice = () => {
    const [count,setCount]=useState(0)
    const [data,setData]=useState("Click the Button to Get Advice")
   async function click(){
    try{
        const Data=await fetch("https://api.adviceslip.com/advice")
        const Data1=await Data.json()
        const newAdvice =Data1.slip.advice
        if(newAdvice!==data)
        {
        setData(newAdvice)
        setCount(count+1)
        }
    }
    catch(error)
    {
        console.log(error)
    }
    }
  return (
    <>
    <h1 id="advice">{data}</h1>
    <button onClick={click}>Button</button>
    <p>You have read <b>{count}</b> pieces of advice</p>
    </>
  )
}

export default Advice