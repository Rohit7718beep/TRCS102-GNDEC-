import {useState} from "react"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
export default function App(){
  let name="Alex";
  let [number,setNumber]=useState(34);
  function count(){
    setNumber(number+1)
  }
  

  return(
    <> <Navbar/>
    <h1>hi good afternoon</h1>
    <h2>Name is {name}</h2>
    <h3>number is {number}</h3>
    <button id="counter" onClick={count}>click</button>
   <Footer/>
    </>
    
  )
}