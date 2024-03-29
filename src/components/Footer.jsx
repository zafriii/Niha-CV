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


              <div className="info">

              <div className="info-1">

              <div className="social-1"> 
              <CgMail className='icon' />
              <a href='https://nihazafar050@gmail.com'>nihazafar050@gmail.com</a>
              </div>

              <div className="social-2"> 
              <CiLocationOn className='icon'/>
              <a> Mirer Moidan, Sylhet Bangladesh</a>
              </div>


              <div className="social-3"> 
              <FaFacebook className='icon'/>
              <a href='https://www.facebook.com/farihazafar.niha'> facebook.com/farihazafar.niha</a>
              </div>
              

              </div>



              <div className="info-2">

              <div className="social-4"> 
              <IoMdPhonePortrait className='icon'/>
              <a>01714483770</a>
              </div>


              <div className="social-5"> 
              <FaLinkedin className='icon'/>
              <a href='https://www.linkedin.com/in/niha-zafar-7b9753292/'>linkedin.com/in/niha-zafar-7b9753292</a> <br></br> 
              </div>

            
              <div className="social-6"> 
              <FaInstagram className='icon'/>
              <a href='https://instagram.com/___niha______'>instagram.com/___niha______</a>
              </div>


              </div>

              </div>



         <div className="share">


        <div class="share-button" data-href="https://my-cv-nihaa.netlify.app" data-layout="button" data-size="small">
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://my-cv-nihaa.netlify.app" class="fb-xfbml-parse-ignore">Share On Fb</a>
        </div>

        <div class="share-button">
        <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://my-cv-nihaa.netlify.app=Your_CV_Summary&source=https://my-cv-nihaa.netlify.app" target="_blank">
        Share on LinkedIn
        </a>
        </div>

        </div>



    </div>
    </>
  )
}

export default Footer
