import express from "express"
const app= express()
import cors from "cors"
import cookieParser from "cookie-parser"
import login from "./login/login.js"
import register from "./register/register.js"
import db from "./database/database.js"
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
console.log("Password:", process.env.mysql_password);
app.use("/login",login)
app.use("/register",register)

app.listen(3000,()=>{
    console.log("server is running on port no. 3000")
})