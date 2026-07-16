import App from "./app.js";
import db from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT ;
db();
console.log(process.env.PORT);

App.listen(process.env.PORT,()=>{
    console.log(`local host is running at port ${process.env.PORT}`)
   
})

