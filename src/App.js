import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './Components/Signup/Signup';
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";


function App() {


  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Login />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
