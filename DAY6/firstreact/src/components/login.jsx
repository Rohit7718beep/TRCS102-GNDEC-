//conditional rendering 

function Login(){
   let isloggedin=true;
let result =  isloggedin ? "welcome" : "Please Login";


//if-else
//     if(isloggedin){return(<>
// <h1>welcome to website</h1>
//     </>)}
//     else{
//         return(<>
//         <h1>not logged in</h1>

//         </>)
//     }


//ternary
// return (
//     <>
//    <h1>{result}</h1>
//     </>
// )
// }

//logical and
return(<>
{isloggedin && <h1>WELCOME TO website </h1>}</>
    
)}

export default Login;