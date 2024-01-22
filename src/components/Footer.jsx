import React from 'react'
import './footer.css'
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <>
    
    <div className="footer">

              <div className="info-1">

              <div className="social-1"> 
              <CgMail className='icon' />
              <a href='https://nihazafar050@gmail.com'>nihazafar050@gmail.com</a>
              </div>

              <div className="social-2"> 
              <CiLocationOn className='icon'/>
              <a> Mirer Moidan, Sylhet Bangladesh</a>
              </div>              

              </div>

              <div className="info-2">

              <div className="social-4"> 
              <IoMdPhonePortrait className='icon'/>
              <a>01714483770</a>
              </div>


              <div className="social-5"> 
              <FaLinkedin className='icon'/>
              <a href='https://www.linkedin.com/in/niha-zafar-7b9753292/'>linkedin.com/in/niha-zafar-7b9753292</a> <br></br> <br></br>
              </div>

              </div>

    </div>
    
    
    </>
  )
}

export default Footer
