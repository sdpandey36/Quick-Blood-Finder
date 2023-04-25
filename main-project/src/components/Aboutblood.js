import React from 'react'
import Navbar from './Navbar';
import bloodcellpic from "./bloodcellpic.JPG";


const Aboutblood = () => {
  return (
    <>
    <Navbar/>
    <div class="about-sec-blood">
     <div className='bloodcelldetectForm'>
		<form >
        <label for="img">Select image:  </label>
  <input  type="file" id="img" name="img" accept="image/*"/>
  <button className='btn-bloodcelldetect' >Submit</button>
        </form>
        </div>
        <div className="imagedisplay">
        <img src={bloodcellpic} alt=""/>

        </div>
	</div>
    </>
  )
}

export default Aboutblood
