import "./farmer_details.css"
import {Country,State,City} from "country-state-city"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Farmer_Details(){
const navigate = useNavigate();
const [city,setcity]=useState("")
const [district,setdistrict]=useState("")
const [village,setvillage]=useState("")
const [message,setmessage]=useState("")
const [countryCode, setCountryCode] = useState("");
const [countryName, setCountryName] = useState("");
const [stateCode, setStateCode] = useState("");
const [stateName, setStateName] = useState("");

const farmer_details = async ()=>{
    try{
   const response = await axios.post("http://localhost:3000/farmer_details",{
        countryName,
        stateName,
        city,
        district,
        village,
    },
{
    withCredentials:true
})
const data = response.data;
if(response.status){
    navigate("/dashboard")
}
    } 
    catch(err){
        console.log(err)
        setmessage("something went wrong")
    }
}

const countries = Country.getAllCountries();
const states = State.getStatesOfCountry(countryCode);
const cities = City.getCitiesOfState(countryCode, stateCode);

    return <>
<div className="fd_container">

    <div className="fd_heading">
        <h1>🌱 Complete Your Farm Profile</h1>
        <p>Help us personalize weather updates and farming recommendations.</p>
    </div>

    <div className="fd_grid">

        <div className="fd_group">
     <select
  value={countryCode}
  onChange={(e) => {
    const selected = countries.find(
      (item) => item.isoCode === e.target.value
    );

    setCountryCode(selected.isoCode);
    setCountryName(selected.name);
  }}
>
  <option value="">Select Country</option>

  {countries.map((item) => (
    <option key={item.isoCode} value={item.isoCode}>
      {item.name}
    </option>
  ))}
</select>
        </div>

        <div className="fd_group">
          <select
  value={stateCode}
  onChange={(e) => {
    const selected = states.find(
      (item) => item.isoCode === e.target.value
    );

    setStateCode(selected.isoCode);
    setStateName(selected.name);
  }}
>
  <option value="">Select State</option>

  {states.map((item) => (
    <option key={item.isoCode} value={item.isoCode}>
      {item.name}
    </option>
  ))}
</select>
        </div>

        <div className="fd_group">
            <label>City</label>
           <select value={city} onChange={(e) => setcity(e.target.value)}>
  <option value="">Select City</option>
  {cities.map((item) => (
    <option key={item.name} value={item.name}>
      {item.name}
    </option>
  ))}
</select>
        </div>

        <div className="fd_group">
            <label>District</label>
            <input type="text" placeholder="District" onChange={(e)=>setdistrict(e.target.value)}></input>
        </div>

        <div className="fd_group full">
            <label>Village</label>
              <input type="text" placeholder="village" onChange={(e)=>setvillage(e.target.value)}></input>
        </div>

    </div>

    <button className="save_btn" onClick={farmer_details}>Save & Continue </button>

</div>
    </>
}
export default Farmer_Details;