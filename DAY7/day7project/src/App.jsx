import { useState } from "react";
import Form from "./components/form";
import Passtoggle from "./components/Passtoggle"
function App(){
  const [count,setcount]=useState(0)
  return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>setcount(count+1)}>++</button>
    <button onClick={()=>setcount(count-1)}>--</button>
    <button onClick={()=>setcount(0)}>reset</button><br/>
   <Form/>
   <Passtoggle/>
  
    </>


  )
}

export default App;