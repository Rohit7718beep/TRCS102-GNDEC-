
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home'
import About from "./components/footer";
import Navbar from "./components/navbar";
function App(){
 
const router=createBrowserRouter([{
  path:"/",
  element: <Home/>  },
  {
  path:"/About",
  element:<About/>},
  {
    path:"/navbar",
    element:<Navbar />
  }

])
  return(<>
<RouterProvider  router={router}/>
<a href="/About">About</a><br/>
<a href="/navbar">Navbar</a>
  </>)
}

export default App;