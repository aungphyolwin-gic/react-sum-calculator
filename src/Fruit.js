import { useState } from "react"

export default function Fruit(){
    let [fruit, setFruit] = useState('Orange');
    const [count, setCount] = useState(0);

    const counter = ()=>{
        setCount((preState)=>preState+1)
        setCount((preState)=>preState+1)
        setCount((preState)=>preState+1)
    }

    const changeFruit = ()=>{setFruit('Apple')}
    return (<>
                <p>{fruit}</p>
                <button onClick={changeFruit}>Change</button>

                <h1>Coundown</h1>
                <h5>{count} </h5>
                <button onClick={counter}>increase</button>
            </>)
}