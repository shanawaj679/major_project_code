import { Routes, Route } from "react-router-dom";
import Register_user from "./register/register.jsx";
import Dashboard from "./dashboard/dashboard.jsx";
import Login from "./login/login.jsx";
function App(){
  return <>
 <Routes>

      <Route path="/" element={<Register_user />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}/>

    </Routes>
  </>
}
export default App;