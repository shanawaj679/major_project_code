import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
function middleware_auth(req,res,next){
    const token = req.cookies?.token;
    if(!token){
        return res.status(404).json({message:"please login first"})
    }
    try{
const verify = jwt.verify(token , process.env.Jwt_Key);
req.user=verify;
next()
    }
    catch(err){
        return res.status(401).json({message:"invalid or expired token"
        })
    }
}
export default middleware_auth;