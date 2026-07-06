import {useState} from "react"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import image from "./assets/Gemini_Generated_Image_v1d922v1d922v1d9.png";
import image1 from "./assets/PC_QC_186X116_lifestyle_6._SY116_CB781120572_.jpg"
import Login from "./components/login";
export default function App(){
  
  let [number,setNumber]=useState(34);
  function count(){
    setNumber(number+1)
  }
  function reset(){
    setNumber(number=0)
  }

  return(
    <> <Navbar/><br/>
    <Login/>


    <h1 className="bg-sky-500 text-center">hi good afternoon</h1>
    <div flex space-x-4>
    <div className="flex justify-center items-center">
    <img src={image} width="300"  alt="Generated Image" />
   
  <img src={image1}/></div>
    <div className="flex justify-center items-center mx-8">
    <h3>number is {number}</h3>
</div>
<div className="flex justify-center items-center">
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={count}>click</button>
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={reset}>reset</button>
</div>
</div>
   <Footer name="Alex" age="21"/>
   
  
    </>
    
  )
}