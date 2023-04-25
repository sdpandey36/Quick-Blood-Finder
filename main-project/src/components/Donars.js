// In this tutorial we will learn about fetch api 
// async makess a function return a promise 
// await makes a function wait for a promise

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import EmailButton from './EmailButton';
import profile from "./profile.png";

const Donars = ({blood,locate, onChange }) => {

    const [datas,setData]=useState([]);
    // here [] is useEffect hook dependency list (array) which makes a page render only one time ie when we open page

   
    
// const blood=props.blood;

const onClickHandle = ( curElement) =>  {
    console.log("handle clicked");
    onChange(curElement.address)
}

useEffect(()=>{
    const fetchPost = async () => {
        const response = await fetch(
            'http://localhost:6003/getAllUser'
            );
            const datas = await response.json();
            console.log(datas);
            setData(datas.data);
        };
        fetchPost();
    },[])

  
  console.log(datas)
  
    
    return(
        <>
      <Navbar/>
      <div className="containerDonar">
          <h1>Donar List for {blood}</h1>
          {
              datas.map((curElement)=>{
            //  if(blood===curElement.bloodgroup){
                if(blood===curElement.bloodgroup && locate===curElement.address){

                 return(
                  <div className="cards">
                  <div className='card-header'>
                  <img src={profile} alt="some random profile" className='pic'/>
                  <div className='card-header-text'>
                  <h4>{curElement.fullname}</h4>
                  <div>{curElement.number}</div>
                  <div className='location-group'>
                  <div>Location: {curElement.address}</div>
                  <div>BloodGroup: {curElement.bloodgroup}</div>
                  </div></div>
                  </div>
                  <div className="main-contentDonar">
                     
                  </div>
                  <div className="button-row">
                   <Link to="/MapDirection"><button type='submit' onClick={()=> onClickHandle(curElement)} id='btn'>Direction</button></Link> 
                   <EmailButton name={curElement.fullname} email={curElement.email}/>
                   </div>
                  </div>)
                    }
          })
        }
  <div >
  </div>
  </div>
        </>
  )
 
   
}

export default Donars

