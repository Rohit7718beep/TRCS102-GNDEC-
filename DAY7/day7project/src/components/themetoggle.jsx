import { useState } from "react";

function ThemeToggle(){

    const [isDark,setisdark]=useState(false)
    return(<>
    
        {/* <body style={{backgroundColor: isDark? "black" : "white",
            color: isDark? "white":"black"}
        }>
            <button onClick={()=>setisdark(!isDark)}>Toggle</button>
        </body> */}
   

    </>)


}
export default ThemeToggle;