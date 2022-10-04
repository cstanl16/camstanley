import React from 'react';

function ResumePage() {
    return (
        <div className="resumePage"> 
            <div className="resumeList" >
                <ul>
                    <li><a href="#objective" >Objective</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#education" >Education</a></li>
                    <li><a href="#skills"  >Skills</a></li>
                    <li><a href="#languages" >Languages</a></li>
                    <li><a href="#references" >References</a></li>
                </ul>
                <scrollbars className="line"></scrollbars>
            </div>


                    <div id="objective"className="resumeBubble" >

                        <h1> Objective</h1>
                        <p>To work with a software development team and expand my skills in
                        the computer science field. </p>
                    </div>

                    <div id="experience"className="resumeBubble" >
                        <h1> Experience</h1>
                        <h3>Maultsby Construction, Shallotte, NC— Foreman</h3>
                        <p>
                            October 2020 - PRESENT
                            Fulfilled the duties of locating, inspecting, and supervising water mains, transporting
                            materials from job sites, and working with the City of Wilmington officials by
                            repairing roads with asphalt.
                        </p>
    
                        <h3>AutoZone, Charlotte, NC — Part Sales Manager</h3>
                        <p>
                            July 2018 - November 2021
                            Fulfilled the duties of customer service, being a cashier, handling money, being a key
                            holder, opening and closing the store, assisting customers with automobile issues,
                            and supervising the store as a manager.
                        </p>

                        <h3>BHI Limited, Bald Head Island, NC — Seasonal Outfitter</h3>
                        <p>
                            May 2019 - September 2021
                            Fulfilled the duties of customer service, safely loading and unloading cargo from the
                            boat, transporting customers and their cargo to their destinations, assisting
                            customers lifting their cargo inside, and working diligently to remain in line with
                            hourly boat docking. 
                        </p>
                    </div>
                
                    <p id="education"></p>
                    <div className="resumeBubble" >
                            <h1>Education</h1>
                            <h3>UNC Charlotte, Charlotte, NC— Bachelor’s in Computer Science</h3>
                            <p>
                                (Concentration in Software Engineering)
                                Expected Graduation Date: May 2022
                            </p>

                            <h3>Brunswick CC, Bolivia, NC— Associate’s in Science</h3>
                            <p>
                                Graduation Date: May 2018
                            </p>

                            <h3>Brunswick Early College High School, Bolivia, NC— High School</h3>
                            <p>
                                High School Diploma
                                Graduation Date: May 2018
                            </p>
                    </div>

                    <p id="skills"></p>
                    <div className="resumeBubble" >
                            <h1>Skills</h1>
                            <p>
                                Communication
                                Leadership
                                Organization
                                Inventory
                                Teamwork
                                Problem Solving
                                Customer Service
                            </p>
                    </div>

                    <p id="languages"></p>
                    <div className="resumeBubble" >
                            <h1>Languages</h1>
                            <p>
                                React
                                Java
                                JavaScript
                                Auth0
                                HTML5
                                CSS3
                                MySQL
                                MongoDB
                            </p>
                    </div>

                    <p id="references"></p>
                    <div className="resumeBubble" >
                            <h1>References</h1>
                            <p>
                                Bonner Stiller — BHI
                                Limited:
                                Transportation Manager
                                OMITTED
                            </p>
                            <p>
                                Jackson Maultsby —
                                Maultsby Construction:
                                Project Manager
                                OMITTED
                            </p>
                    </div>   
        </div>
    );
}

export default ResumePage; 

