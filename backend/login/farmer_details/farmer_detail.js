import express from "express"
import db from "../../database/database.js";
import middleware_auth from "../../middleware/middleware.js"
const router = express.Router();
router.post("/",middleware_auth,async (req,res)=>{
    try{
        const {countryName,stateName,city,district,village} = req.body;
        if(!countryName||!stateName||!city){
            return res.status(404).json({message:"all feilds are required"})
        }
 await db.query("insert into user_living_info(country,state,city,district,village,id) values (?,?,?,?,?,?)",[countryName,stateName,city,district,village,req.user.id])

 return res.status(201).json({
    message: "Farmer details saved successfully"
});
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"internal server error"})
    }
})
export default router