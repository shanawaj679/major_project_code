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
import farmer_details from "../backend/login/farmer_details/farmer_detail.js"
import get_user_geo_data from "../backend/dashboard/get_user_geo_data.js"
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
app.use("/farmer_details",farmer_details)
app.use("/get_geo_data",get_user_geo_data)

app.listen(3000,()=>{
    console.log("server is running on port no. 3000")
})