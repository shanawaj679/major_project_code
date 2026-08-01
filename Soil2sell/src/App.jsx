import { Routes, Route } from "react-router-dom";
import Register_user from "./register/register.jsx";
import Dashboard from "./dashboard/dashboard.jsx";
import Login from "./login/login.jsx";
import Farmer_Details from "./farmer_details/farmer_details.jsx";
function App(){
  return <>
 <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register_user />} />
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/Farmer_Details" element={<Farmer_Details />}/>

    </Routes>
  </>
}
export default App;