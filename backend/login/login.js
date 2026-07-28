import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import express from "express"
import db from "../database/database.js"
import jwt from "jsonwebtoken"
dotenv.config();
const router = express.Router()
router.post("/",async (req,res)=>{
try{
  const {email,password} = req.body;
if(!email||!password){
  return res.status(400).json({message:"Please fill all required fields"})
}
if(!email.includes("@")||!email.includes(".")){
  return res.status(400).json({message:"Please check your email"})
}
const [user]=await db.query("select id,password from s2s_user where email = (?)",[email])
if(user.length===0){
  return res.status(404).json({message:"user didn't exists., please register"})
}
const verify_password = await bcrypt.compare(password,user[0].password)
if(!verify_password){
  return res.status(401).json({message:"invalid password."})
}
const jwtoken = jwt.sign(
{id:user[0].id},
process.env.Jwt_Key,
{expiresIn:"1d"}
)
res.cookie("token",jwtoken,{
  httpOnly:true,
  sameSite:"lax",
  maxAge:24*60*60*1000,
})
return res.status(200).json({message:"login successfull"})
await db.query("insert into login_user (id,login_time) values (?,now())",[req.user.id])
}
catch(err){
    console.log(err)
    return res.status(500).json({message:"internal server error"})
}
})
export default router;
