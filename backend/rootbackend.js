import express from "express"
const app= express()
import cors from "cors"
import cookieParser from "cookie-parser"
import login from "./login/login.js"
import register from "./register/register.js"
import db from "./database/database.js"
import middleware_auth from "./middleware/middleware.js"
import getuser_data from "./dashboard/getuser_data.js"
import logout from "./login/logout.js"
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use("/login",login)
app.use("/register",register)
app.use("/get_user",getuser_data)
app.use("/log_out",logout)

app.listen(3000,()=>{
    console.log("server is running on port no. 3000")
})