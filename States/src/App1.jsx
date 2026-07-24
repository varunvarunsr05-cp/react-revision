import { useState } from "react";

function App1(){
    const [count, setcount] = useState(0)
    const [count1, setcount1] = useState(1)

    let counts=()=>{
        setcount(count+1);
    }

    return(
        <>
        <div className="container">
            <button onClick={counts} >The count is {count} </button>
            <button onClick={()=>setcount1(count1+1)} >The count is {count1} </button>
        </div>
        </>
    )
}

export default App1