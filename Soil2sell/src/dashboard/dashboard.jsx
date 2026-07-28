import "./dashboard.css"
import {FaSearch,FaLock, FaCog, FaSignOutAlt} from "react-icons/fa"
import {motion} from "framer-motion"
import axios from "axios"
import { useState ,useEffect} from "react"
function Dashboard(){
    const [logout,setlogout]=useState("")
const [message,setmessage]=useState({})
const [uservisible,setuservisible]=useState(true)
const toggleinfo = ()=>{
    setuservisible(!uservisible);
}
useEffect(()=>{
    get_user()
},[])
const get_user = async()=>{
try{
const response = await axios.get("http://localhost:3000/get_user",{
    withCredentials:true
})
const data = response.data
setmessage(data)
}
catch(err){
    setmessage("something went wrong")
}
}
const logout_user = async ()=>{
    try{
        const response = await axios.post("http://localhost:3000/log_out",
            {},
    {
        withCredentials:true
    })
    const data =response.data
    setlogout(message)
}
catch(err){
      setmessage("something went wrong")
}
    
}
const fadeup={
     initial:{opacity:0,scale:0.98},
        whileInView:{opacity:1,scale:1},
        transition:{duration:0.75},
        viewport:{once:false,amount:0.3},     
}
    return <>
    <header>
        <motion.div 
        {...fadeup}
        className="navbar">
            <motion.div  className="dashboard_logo gradiant_text">S2S</motion.div>
            <motion.div className="search_container">
               <FaSearch className="search_icon" />
                <input
                      type="text"  placeholder="Search crops, diseases, soil..."  className="dashboard_search_bar"  />
                  </motion.div>
            <motion.div >
                <button className="user_information gradiant_text" onClick={toggleinfo}> 👤 {message.name}</button>
            </motion.div>
        </motion.div>
           
    </header>
    <main>
        <div className="main_grid_1">

        </div>
        <div  className="main_grid_2">
              {uservisible && (
    <motion.div 
     initial={{opacity:0,scale:0.98}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.85}}
        viewport={{once:false}}
            className="users_info">
                <div>👤 : {message.name}</div>
                <div>📧  : {message.email}</div>
                <br />
        <button className="user_info_buttons"><FaLock /> change password</button>
        <button className="user_info_buttons"> <FaCog /> settings</button>
        <button className="user_info_buttons" onClick={logout_user}> <FaSignOutAlt /> logout</button>
        <div>{logout}</div>
    </motion.div>
)}
        </div>
    </main>

    </>
}
export default Dashboard;