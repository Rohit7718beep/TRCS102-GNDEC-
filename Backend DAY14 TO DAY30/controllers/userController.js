import User from "../models/User.js";
import mongoose from "mongoose";
export const addUser = async (req,res)=>{
    try{
const{name,email,age,password}=req.body;
        const user= await User.create(req.body)
        if(User){
            res.status(200).json({
                message:"User added",
                User:User
            })
        }
    }
    catch(error){
        res.json({
            error:error,
        })
    }

}

