import logo from './logo.svg';
import './App.css';
import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home"
import { Routes ,Route, useNavigate} from 'react-router-dom';
import Donate from './components/Donate';
import Donars from './components/Donars';
import Contact from './components/Contact';
import About from './components/About';

import { useEffect, useState } from 'react';
import MapDirection from './components/MapDirection';
import Aboutblood from './components/Aboutblood';

function App() {
  const [auth,setAuth]=useState(false)
  const navigate=useNavigate()
  const storedData = localStorage.getItem("user");
  useEffect(()=>{
    if(auth || storedData)
    {
      navigate('/Home')
    }
    else{

    navigate('/Login')
    }
    
 },[])


 const [value,Setvalue]=useState("")
 const [locat,Setlocate]=useState("")


 const [newdest,Setnewdest]=useState("")
 
const test = (destination) => {
  Setnewdest(destination)
  // console.log("destination value is ", destination);
}


 const [destination,Setdestination]=useState("");
  return (
    <>
 
  <Routes>
  <Route path='/' element={<Register/>} ></Route>
  <Route path='/Login' element={<Login setAuth={setAuth}/>} ></Route>
  <Route path='/Home' element={<Home Setvalue={Setvalue} Setlocate={Setlocate}/>} ></Route>
  <Route path='/Donate' element={<Donate/>} ></Route>
  <Route path='/Donars' element={<Donars blood={value} locate={locat} onChange={test}/>} ></Route>
  <Route path='/Contact' element={<Contact/>} ></Route>
  <Route path='/About' element={<About/>} ></Route>
  <Route path='/Aboutblood' element={<Aboutblood/>} ></Route>
  
  <Route path='/MapDirection' element={<MapDirection  location={locat} destination={newdest}/>} ></Route>
  </Routes>


    </>
  );
}


export default App;
