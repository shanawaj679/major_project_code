import express from "express"
const router = express.Router();
import db from "../database/database.js";
import middleware_auth from "../middleware/middleware.js";
router.get("/",middleware_auth,async (req,res)=>{
try{
const [user] = await db.query("select name,email from s2s_user where id = ?",[req.user.id])
if(user.length===0){
    return res.status(404).json({message:"user not found"})
}
res.json(user[0])
}
catch(err){
    return res.status(500).json({message:"internal server error"})
}
})
export default router