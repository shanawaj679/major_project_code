import "./dashboard.css"
import {FaSearch,FaLock, FaCog, FaSignOutAlt} from "react-icons/fa"
import {motion} from "framer-motion"
import axios from "axios"
import { useState ,useEffect, use} from "react"
import { useNavigate } from "react-router-dom"
function Dashboard(){
 const navigate = useNavigate()
const [logout,setlogout]=useState("")
const [geodata, setgeodata]=useState("")
const [country,setcountry]=useState("")
const [state,setstate]=useState("")
const [city,setcity]=useState("")
const [district,setdistrict]=useState("")
const [village,setvillage]=useState("")
const [message,setmessage]=useState({})
const [uservisible,setuservisible]=useState(true)
const toggleinfo = ()=>{
    setuservisible(!uservisible);
}

useEffect(()=>{
get_geo_data()
},[])
const get_geo_data = async ()=>{
    try{
 const response = await axios.get("http://localhost:3000/get_geo_data",{
withCredentials:true
})
const data = response.data;
setgeodata(data)
    }
    catch(err){
        console.log(err)
        setmessage("something went wrong")
    }
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
    navigate("/")
    
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

                    <motion.div {...fadeup} 
                     transition={{...fadeup.transition,duration:1}}>
                          <h2>{date}</h2>
                          <h2>{geodata.country}</h2>
                           <h2>{geodata.state}</h2>
                            <h2>{geodata.city}</h2>
                             <h2>{geodata.district}</h2>
                              <h2>{geodata.village}</h2>
                    </motion.div>
</div>
 </motion.div>

<motion.div {...fadeup}
transition={{...fadeup.transition,duration:1.2}} className="wether_details">
<motion.div {...fadeup}
transition={{...fadeup.transition,duration:1.5}} className="weather_container">

<div className="weather_header">
    <h1>🌤 Current Weather</h1>
    <h2>{geodata.temperature}°C</h2>
    <p>Feels like {geodata.feels_like}°C</p>
</div>

<div className="weather_grid">

<div className="weather_card">
<h3>💧 Humidity</h3>
<p>{geodata.humidity}%</p>
</div>

<div className="weather_card">
<h3>☁️ Cloud Cover</h3>
<p>{geodata.cloud_cover}%</p>
</div>

<div className="weather_card">
<h3>🌧 Rainfall</h3>
<p>{geodata.rainfall} mm</p>
</div>

<div className="weather_card">
<h3>🌬 Wind</h3>
<p>{geodata.wind_speed} km/h</p>
</div>

<div className="weather_card">
<h3>🌡 Max Temp</h3>
<p>{geodata.max_temperature}°C</p>
</div>

<div className="weather_card">
<h3>❄️ Min Temp</h3>
<p>{geodata.min_temperature}°C</p>
</div>

<div className="weather_card">
<h3>☀️ UV Index</h3>
<p>{geodata.uv_index}</p>
</div>

<div className="weather_card">
<h3>👀 Visibility</h3>
<p>{geodata.visibility/1000} km</p>
</div>

<div className="weather_card">
<h3>🌅 Sunrise</h3>
<p>{geodata.sunrise}</p>
</div>

<div className="weather_card">
<h3>🌇 Sunset</h3>
<p>{geodata.sunset}</p>
</div>

<div className="weather_card">
<h3>🌱 Soil Temp</h3>
<p>{geodata.soil_temperature}°C</p>
</div>

<div className="weather_card">
<h3>💦 Soil Moisture</h3>
<p>{(geodata.soil_moisture*100).toFixed(1)}%</p>
</div>

</div>
</motion.div>

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