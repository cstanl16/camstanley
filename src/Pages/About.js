import React from 'react';
import personalbudget from '../Images/PersonalBudget.png'
import college2career from '../Images/college2career.png'
import deepdive from '../Images/deepdive.png'
import fido from '../Images/Fido.png'

function About() {
    return (
        <div className="aboutPage">
            <div className="aboutSection1">
                <h1>Visit My Other Sites!</h1>
                <p>See how far I have come by visiting some of my old websites.</p>
                
                <div className="test">

                    <a href="https://www.personalbudget.camstanley.com"><img className="websiteImages" src={personalbudget} alt="Personal Budget Tracker"></img></a>
                    <div className="blackBox" >
                        <h3>Personal Budget Tracker</h3>
                        <p>An easy to use website to create an account and keep track of your budget. With the 
                            security of Auth0 and safe database access through mongoDB, this website shows the 
                            capabilities of using the React framework.
                        </p>

                    </div>
                    
                </div>
                
                <div className="test">

                    <a href="#"><img className="websiteImages" src={fido} alt="Fido Feeder"></img></a>
                    <div className="blackBox" >
                        <h3>Fido Feeder</h3>
                        <p>An IOS app designed for pet owners! Users can simply input foods into the search 
                            bar and find info about whether or not their pup can eat them. User account and 
                            profiles are functional through Auth0.
                        </p>

                    </div>
                    
                </div>

                <div className="test">

                    <a href="#"><img className="websiteImages" src={deepdive} alt="Deep Dive"></img></a>
                    <div className="blackBox" >
                        <h3>Deep Dive Music</h3>
                        <p>A functional website developed to analyze trends in music. The back end software 
                            written in python is able to compare the popularity of music with many different
                            factors to help new artist or producers to know what music works now!
                        </p>
                    </div>
                    
                </div>

                <div className="test">

                    <a href="#"><img className="websiteImages" src={college2career} alt="College 2 Career"></img></a>
                    <div className="blackBox" >
                        <h3>College 2 Career</h3>
                        <p>A more basic website created using React. This was originally created as a first design 
                            for an app to help students with finding jobs after college. With some tweaking and 
                            what I have learned, this website could be very useful. 
                        </p>
                    </div>
                    
                </div>
                
                
                
            </div>

            <div className="aboutSection2">
                
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#eba170" fill-opacity="1" d="M0,32L720,192L1440,0L1440,0L720,0L0,0Z"></path>
            </svg>
            </div>
            

        </div>
    );
}

export default About; 
