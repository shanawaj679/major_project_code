import express from "express"
import bcrypt from "bcryptjs"
import db from "../database/database.js"
const router = express.Router()
router.post("/",async(req,res)=>{
    try{
           const {name,email,password,confirmpassword} = req.body;
             if(!name||!email||!password||!confirmpassword){
              return res.status(400).json({message:"Please fill in all the required fields."})
             }
             if(!email.includes("@")||!email.includes(".")){
                 return res.status(400).json({message:"Please enter a valid email address"})
             }
             if(password.length < 8 || confirmpassword.length <8){
              return res.status(400).json({message:"password must be 8 char. long"})
             }
             if(password !== confirmpassword){
              return res.status(400).json({message:"Passwords do not match"})
             }
             const hashedpassword = await bcrypt.hash(password,10)
             await db.query("insert into s2s_user(name,email,password) values (?,?,?)",[name,email,hashedpassword])
             return res.status(200).json({message:"regisration is successfull. please login by using above link"})
    }
    catch(err){
         console.log(err)
    return res.status(500).json({message:"internal server error"})
    }
})
export default router;