import express from "express"
import middleware_auth from "../middleware/middleware.js"
import db from "../database/database.js"
const router = express.Router();

router.post("/",middleware_auth,async (req,res)=>{
try{
 res.clearCookie("token", {
            httpOnly: true,
            sameSite: "lax",
            secure: false 
        });
    res.json({message:"logout successful"})
}
catch(err){
    return res.status(500).json({message:"internal server error"})
}
})
export default router;