import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const logoutHandler = ()=>{
        localStorage.removeItem("user")
    }
    return (
        <>
       
        <div className="container">

        
        <div className="navbar">
            <nav>
                <div className="logo">
                <Link to='/Home'>BLOOD-FINDER</Link>
                </div>
                <div className="listitem">
                <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/aboutblood">BloodCellDetect</Link></li>
              
                <li><Link to="/donate">Donate</Link></li>
                {/* <li><Link to="/donars">Donars</Link></li> */}
                
                {/* <li><Link to="/signup">Signup</Link></li> */}
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/Login" onClick={logoutHandler}>Logout</Link></li>
                </ul>
                </div>
               
                

            </nav>
        </div>
       

    
        </div>
        

        </>
    
  )
}

export default Navbar
