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
const fadeup = {
  initial: { opacity: 0,y: 35, scale: 0.98, filter: "blur(6px)",},
  whileInView: { opacity: 1,y: 0,scale: 1,filter: "blur(0px)",},
  transition: {duration: 0.8,ease: [0.22, 1, 0.36, 1], },
  viewport: {once: true,amount: 0.2,},
};

const hour = new Date().getHours();
let greetings = "";
if (hour >= 5 && hour < 12) {
    greetings = "Good Morning";
} else if (hour >= 12 && hour < 17) {
    greetings = "Good Afternoon";
} else if (hour >= 17 && hour < 21) {
    greetings = "Good Evening";
} else {
    greetings = "Welcome Back";
}
const motivations = [
 "🚜 Smart farming starts with smart decisions",
 "🌾 Turning soil insights into better harvests",
 "🌿 Grow smarter. Harvest better. Sell easier",
 "📊 Everything you need for your farm, all in one dashboard",
 "☀️ A new day, new opportunities for a better harvest",
 "🌱 AI-powered farming for a sustainable tomorrow",
 "🚀 Helping farmers make confident decisions every day",
 "🌍 Better soil. Better crops. Better future",
 "🤝 Connecting farmers directly to opportunities",
 "🌱 Welcome back! Let’s cultivate success together",
]
let motivation = motivations[parseInt(Math.random() * motivations.length)]

let date = new Date().toLocaleDateString("en-IN",{
     weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

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
            <motion.div {...fadeup}
            transition={{...fadeup.transition, duration:0.8}} className="greet_container"> 
                   <div className="greeting_section">
                    <div>
 <h2 className="greet">{greetings}</h2>
 <h1 className="greet"><span>{message.name} 👋</span></h1>
<p className="greet_subtitle">{motivation}</p>
                    </div>

                    <div>
                          <h2>{date}</h2>
                    </div>

</div>
 </motion.div>
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