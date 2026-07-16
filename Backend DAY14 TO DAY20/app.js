import express from "express";
import dotenv from "dotenv"
const app=express();
//config
dotenv.config();
app.use(express.json());
//middleware
//routes
const arr=[{ 
    "id":1,
    "name":"chanchal",
    "class":10

},
{
     "id":2,
    "name":"Rohit",
    "class":10 
}]
const arr1=[{ 
    "id":2,
    "st":"ravi",
    "class":10

}]
app.get("/",(req,res,)=>{
    res.send(arr)
})
app.post("/",(req,res)=>{
   arr.push(req.body)
  
   res.json(arr,"added successfully")
})
app.get("/home",(req,res)=>{
    res.send(arr1)
})
app.post("/home",(req,res)=>{
   arr1.push(req.body)
  
   res.json(arr1,"added successfully")
})
app.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = arr.find(item => item.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json(student);
});
app.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = arr.find(item => item.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  student.name = req.body.name || student.name;
  student.class = req.body.class || student.class;

  res.status(200).json({
    message: "Student updated successfully",
    data: student
  });
});

app.delete("/home/:id",(req,res)=>{
    const productId=Number(req.params.id);
    const index=arr.findIndex((s)=>s.id === productId);
     if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }
    arr.splice(index,1);
    res.json({
        message:"Deleted Successfully",
        data:arr,
    })
})


export default app;