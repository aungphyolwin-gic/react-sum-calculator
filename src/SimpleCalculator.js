import React, { useState } from 'react'

export default function SimpleCalculator() {

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [opt, setOpt] = useState();
  const [result, setResult] = useState("0");

  const calcSum = (event)=>{
    event.preventDefault();
    console.log(event);

    if(!num1 || !num2  ){
      alert("Please enter value in number 1 and number 2.")
    }
    else if( opt === "plus")
    {
      const result = parseInt(num1) + parseInt(num2);
      setResult(result)
    }
    else if( opt === "minus")
    {
      if(num1 < num2){
        alert("Cannot calculate! First number is less than second number")
      }
      else{
      const result = parseInt(num1) - parseInt(num2);
      setResult(result)
      }
    }
    else if( opt === "multiply")
    {
      const result = parseInt(num1) * parseInt(num2);
      setResult(result)
    }
    else if( opt === "divide")
    {
      if(parseInt(num2) === 0 ){
        alert("Cannot divide, Second number cannot be ZERO.")
      }
      else{
        const result = parseInt(num1) / parseInt(num2);
        setResult(result)
      }
    }
    else{
      alert ("Please select an opeation.")
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
          
          <div>
            <label htmlFor='operation'> Calculation method : </label>
            <div>
            <select className='' name='operation' onChange={(e)=>setOpt(e.target.value)}>
              <option value="">Select operaton...</option>
              <option value="plus"> + </option>
              <option value="minus"> - </option>
              <option value="multiply"> x </option>
              <option value="divide"> ÷ </option>
            </select>
            </div>
          </div>

          {/* input number 2 */} 
          <div>
              <label htmlFor='num2'>Number 1 : </label>
              <input type='number' name='num2' id='num2' 
                      placeholder='Enter first number' value={num2} 
                      onChange={(e)=>setNum2(e.target.value)} />
          </div>

          <button className='btn' type='submit'>Calculate</button>


        </form>
          <div className='center'>
              <h3>Your sum is : {result}</h3>
          </div>
      </div>
    </div>
  )
}
