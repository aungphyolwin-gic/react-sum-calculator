import React, { useState } from 'react'

export default function SimpleCalculator() {

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [add, setAdd] = useState("0");

  const calcSum = (event)=>{
    event.preventDefault();
    console.log(event);

    if(num1 == NaN || num2 == NaN ){
      alert("Please enter value in number 1 and number 2")
    }
    else{
      const add = parseInt(num1) + parseInt(num2);
      setAdd(add)
    }
  }

  return (
    <div className='app'>
      <div className='container'>
        <h2> Sum Calculator </h2>
        <form onSubmit={calcSum}>

          {/* input number 1 */}
          <div>
              <label htmlFor='num1'>Number 1 : </label>
              <input type='number' name='num1' id='num1' 
                      placeholder='Enter first number' value={num1} 
                      onChange={(e)=>setNum1(e.target.value)} />
          </div>

          {/* input number 2 */} 
          <div>
              <label htmlFor='num2'>Number 1 : </label>
              <input type='number' name='num2' id='num2' 
                      placeholder='Enter first number' value={num2} 
                      onChange={(e)=>setNum2(e.target.value)} />
          </div>

          <button className='btn' type='submit'>Sum</button>


        </form>
          <div className='center'>
              <h3>Your sum is : {add}</h3>
          </div>
      </div>
    </div>
  )
}
