import React from 'react'
import './herosection.css'

function Herosection() {
  return (
    <>
    
    <div className="my-info">


        <div className="edu-work">

            <h2 className='edu'>EDUCATION</h2>

            <div className="bsc">
                <h3>B.Sc inSoftware Engineering</h3>
                <h3>Metropolitan University</h3>
                <div className="date-place">
                    <p>22/Jan- Present,</p>
                    <p>Sylhet, Bangladesh</p>
                </div>
            </div>


            <div className="hsc">

                    <h3>HSC</h3>
                    <h3>Sylhet Govt Women's College</h3>
                <div className="date-place">
                    <p>06/2018 - 04/2020,</p>
                    <p>Sylhet,Bangladeshh</p>
                </div>

                <h4>Courses</h4>
                <li>GPA: 5.00</li>


            </div>


            <div className="ssc">

                    <h3>SSC</h3>
                    <h3>Blue Bird School and College</h3>
                <div className="date-place">
                    <p>01/2016 - 02/2018,</p>
                    <p>Sylhet,Bangladesh</p>
                </div>

                <h4>Courses</h4>
                <li>GPA: 5.00</li>


            </div>


            <div className="work-exp">

                <h3>WORK EXPERIENCE</h3>

                <p>I've Worked as a React Developer.</p>

            </div>

        </div>


        <div className="skill-achive">

                <div className="skill">
                    <h3>SKILL</h3>
                <div className="ms-skill"> <h5>C++</h5> <h5>Java</h5> <h5>My SQL</h5> </div>
                <div className="it-skill"> <h5>HTML</h5><h5>CSS</h5> <h5>JS</h5> <h5> React JS</h5></div>  
                </div>


                <div className="lang">

                    <h3>LANGUAGES</h3>

                    <div className="langs">

                    <div className="bengali">
                        <h5>Bengali</h5>
                        <p>Full Professional Proficiency</p>
                    </div>

                    <div className="english">
                        <h5>English</h5>
                        <p>Professional Working Proficiency</p>
                    </div>

                    </div>
                    
                </div>



                <div className="interests">
                    <h3>INTERESTS</h3>
                <div className="int1"> <h5>Singing</h5> <h5>Dancing</h5> <h5>Coding</h5> </div>
                <div className="int2"> <h5>Listening Music</h5> <h5>Watching Series</h5></div>  
                </div>


            <div class="reference">
                <h3>REFERENCE</h3>
                <h4>Fuad Ahmed </h4>
                <h5>Dept head of SWE</h5>
                <h5>Metropolitan University</h5>
            </div>


        </div>


    </div>
    
    </>
  )
}

export default Herosection