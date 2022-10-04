import React from 'react';

function About() {
    return (
        <div className="aboutPage">
            <div className="aboutSection1">
                <h1>Visit My Other Sites!</h1>
                <p>See how far I have come by visiting some of my old websites.</p>
                
                <div className="test">

                    <iframe className="iframe" title="Fido Feeder" src="https://fido-host-qqizf.ondigitalocean.app/tab3" />
                    <div className="blackBox" >
                        <h3>Fido Feeder</h3>
                        <p>An IOS app designed for pet owners! Users can simply input foods into the search 
                            bar and find info about whether or not their pup can eat them.
                        </p>

                    </div>
                    
                </div>

                <div className="test">

                    <iframe className="iframe"  title="Deep Dive" src="https://www.deepdive.camstanley.com"/>
                    <div className="blackBox" >
                        <h3>Deep Dive Music</h3>
                        <p>A functional website developed to analyze trends in music. The back end software 
                            written in python is able to compare the popularity of music with many different
                            factors to help new artist or producers to know what music works now!
                        </p>
                    </div>
                    
                </div>

                <div className="test">

                    <iframe className="iframe"  title="College to Career" src="https://www.college2career.camstanley.com"/>
                    <div className="blackBox" >
                    
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
