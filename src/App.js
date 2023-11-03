import {
  BrowserRouter,Routes,Route
}  from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Component/Home';
import Register from './Component/Register';
import Login from './Component/Login';
import Otp from './Component/Otp';
import Map from './Component/Map';
import Address from './Component/Address';
import Search from './Component/Search';
import Success from './Component/Success';
import Profile from './Component/Profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <>
        <Route path='' element={<Home />}/>
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />}/>
        <Route path='/OTP' element={<Otp />}/>
        <Route path='/Map' element={<Map />}/>
        <Route path='/Mapaddress' element={<Address/>} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Success' element={<Success />}/>
        <Route path='/Home' element={<Profile />}/>
      </>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
