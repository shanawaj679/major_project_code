import "./register.css"
import logo from "../assets/logo.png"
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Register_user(){
    const fadeUp = {
  initial: { opacity: 0, scale:0.95 },
  whileInView: { opacity: 1, scale:1 },
  transition: { duration: 0.6 },
  viewport: { once: false, amount:0.3 },
};
const [name,setname]=useState("")
const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const [confirmpassword,setconfirmpassword]=useState("")
const [message,setmessage]=useState("")

const reg_user = async ()=>{
const response = await axios.post("http://localhost:3000/register",{
    name,
    email,
    password,
    confirmpassword,
},
{
withCredentials:true
})
const data = response.data 
setmessage(data.message)
}
return <>
<div className="register_container">
    <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:0.8}} className="register_page"> 
        <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:0.85}} className="register_page_grid_1">
            <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:0.9}} className="register_page_logo gradiant_text">S2S.</motion.div>
            <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:0.95}} className="register_page_headings">  
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1}}>Empower Farmers.</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.05}}>Harvest Smarter.</motion.div>
            </motion.div>
            <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.1}} className="register_page_description">
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.15}}>✓ AI-Based Soil Analysis</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.2}}>✓ Smart Crop Recommendation</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.25}}>✓ Plant Disease Detection</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.3}}>✓ Fertilizer & Irrigation Guidance</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.35}}>✓ Direct Farmer-to-Buyer Marketplace</motion.div>
            </motion.div>
        </motion.div>
        <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.4}} className="register_page_grid_2">
          
            <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.45}} className="register_page_input_content">Your smart farming journey starts here.</motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.49}} className="reg_page_labels">Full Name</motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.53}}> <input type="text" placeholder="name" id="reg_name" className="reg_page_labels_inputs" value={name} onChange={(e)=>setname(e.target.value)}/> </motion.div>
             <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.57}} className="reg_page_labels">Email Address</motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.61}}> <input type="email" placeholder="shanawaj@gmail.com" id="reg_email" className="reg_page_labels_inputs" value={email} onChange={(e)=>setemail(e.target.value)} /> </motion.div>
             <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.65}} className="reg_page_labels">Password </motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.69}}> <input type="password" placeholder="password" id="reg_password" className="reg_page_labels_inputs" value={password} onChange={(e)=>setpassword(e.target.value)}/> </motion.div>
             <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.73}} className="reg_page_labels">Confirm Password </motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.77}}> <input type="text" placeholder="password" id="reg_confirm_password" className="reg_page_labels_inputs" value={setpassword} onChange={(e)=>setconfirmpassword(e.target.value)} /> </motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.81}} className="reg_page_labels"> <button type="submit" className="reg_page_labels_button" onClick={reg_user}> Create Account</button></motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.85}} className="reg_link_to_login">if you already have an account then <Link className="reg_link" to="/login">Sign In</Link></motion.div>
             <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.89}} className="reg_page_labels" id="reg_output">{message}</motion.div>
        </motion.div>
    </motion.div>
</div>
</>
}
export default Register_user;