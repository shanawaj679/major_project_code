import "./login.css"
import {motion} from "framer-motion"
import axios from "axios"
import { useState } from "react";
function Login_user(){
const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const [message,setmessage]=useState("")
      const fadeUp = {
  initial: { opacity: 0, scale:0.95 },
  whileInView: { opacity: 1, scale:1 },
  transition: { duration: 0.6 },
  viewport: { once: false, amount:0.3 },
};
const login_inputs = async ()=>{
    try{
         const response = await axios.post("http://localhost:3000/login",{
            name,
            email,
            password,
            confirmpassword
         },
        {
            withCredentials:true
        }
    )
    const data = response.data
    setmessage(data.message)
    }
    catch(err){
        console.log(err);
         setmessage(err.response?.data?.message || "Something went wrong");
        return;
    }
}
return <>
<div className="login_container"> 
    <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:0.8}}  className="login_page"> 
        <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:0.85}}  className="login_page_grid_1">
            <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:0.9}}  className="login_page_logo gradiant_text">S2S.</motion.div>
            <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:0.95}}  className="login_page_headings">  
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1}} >Empower Farmers.</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.04}} >Harvest Smarter.</motion.div>
                  </motion.div>
            <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.08}}  className="login_page_description">
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.12}} >✓ AI-Based Soil Analysis</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.16}} >✓ Smart Crop Recommendation</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.2}} >✓ Plant Disease Detection</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.24}} >✓ Fertilizer & Irrigation Guidance</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.28}} >✓ Direct Farmer-to-Buyer Marketplace</motion.div>
               </motion.div>
        </motion.div>
        <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.32}}  className="login_page_grid_2">
          
            <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.36}}  className="login_page_input_content "> Welcome back! </motion.div>
  <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.36}}  className="login_page_input_content_subtle"> Where every field begins with a better decision.</motion.div>
             <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.48}}  className="login_page_labels">Email Address</motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.52}} > <input type="email" placeholder="shanawaj@gmail.com" id="login_email" className="login_page_labels_inputs" value={email} onChange={(e)=>setemail(e.target.value)}/> </motion.div>
             <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.56}}  className="login_page_labels">Password </motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.6}} > <input type="password" placeholder="password" id="login_password" className="login_page_labels_inputs" value={password} onChange={(e)=>setpassword(e.target.value)} /> </motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.72}}  className="login_page_labels"> <button type="submit" className="login_page_labels_button" onClick={login_inputs}> Create Account</button></motion.div>
             <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.76}}  className="login_page_labels" id="login_output"> {message} </motion.div>
        </motion.div>
    </motion.div>
</div>
</>
}
export default Login_user;