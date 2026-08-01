import express from "express"
import middleware_auth from "../middleware/middleware.js";
import db from "../database/database.js";
import axios from "axios"
const router = express.Router();
router.get("/",middleware_auth,async (req,res)=>{
try{
      const [data] = await db.query("select country , state , city , district , village from user_living_info where id = (?)",[req.user.id])
   const location = encodeURIComponent(`${data[0].village},${data[0].city},${data[0].state},${data[0].country}`);
   const geo_lon_lat = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`,{
    headers: {
      "User-Agent": "Soil2Sell/1.0"
    }
   });
   const lat =geo_lon_lat.data[0].lat;
   const lon=geo_lon_lat.data[0].lon;


   const weather = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,cloud_cover,weather_code,precipitation,wind_speed_10m,wind_direction_10m,wind_gusts_10m,surface_pressure,visibility,soil_temperature_0cm,soil_moisture_0_to_1cm&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&timezone=auto`);

const current = weather.data.current;
const daily = weather.data.daily;

const weather_details = {

   country:data[0].country,
   state:data[0].state,
   city:data[0].city,
   district:data[0].district,
   village:data[0].village,

    latitude: weather.data.latitude,
    longitude: weather.data.longitude,
    timezone: weather.data.timezone,
    elevation: weather.data.elevation,

    temperature: current.temperature_2m,
    feels_like: current.apparent_temperature,
    humidity: current.relative_humidity_2m,
    cloud_cover: current.cloud_cover,
    weather_code: current.weather_code,
    rainfall: current.precipitation,

    wind_speed: current.wind_speed_10m,
    wind_direction: current.wind_direction_10m,
    wind_gusts: current.wind_gusts_10m,

    pressure: current.surface_pressure,
    visibility: current.visibility,

    soil_temperature: current.soil_temperature_0cm,
    soil_moisture: current.soil_moisture_0_to_1cm,

    max_temperature: daily.temperature_2m_max[0],
    min_temperature: daily.temperature_2m_min[0],
    sunrise: daily.sunrise[0],
    sunset: daily.sunset[0],
    uv_index: daily.uv_index_max[0],
    rain_probability: daily.precipitation_probability_max[0]
};
      return res.status(200).json(weather_details)
}
catch(err){
    console.log(err)
    return res.status(500).json({message:"something went wrong"})
}
})
export default router