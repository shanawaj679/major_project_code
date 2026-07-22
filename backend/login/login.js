import express from "express"
const router = express.Router()
router.post("/",async (req,res)=>{
try{

}
catch(err){
    console.log(err)
    return res.status(404).json({message:"error in loging in, please check your credentials"})
}
})
