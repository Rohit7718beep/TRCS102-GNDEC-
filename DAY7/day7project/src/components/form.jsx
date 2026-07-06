import { useState } from "react";

function Form(){
const [name,setname]=useState("");
const [age,setage]=useState("");

return(<>
<input type="text" placeholder="Enter Name " value={name}
onChange={(e)=>setname(e.target.value)}

/>
<h1>{name}</h1><br/>
<input type="number" placeholder="Enter Age" onChange={(e)=>setage(e.target.value)}/>
<h1>{age}</h1><br/>


</>)

}
export default Form;