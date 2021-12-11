import React from 'react';

function About() {
    return (
        <div className="aboutPage">
            <div className="aboutSection1">
                <h1>Visit My Other Sites!</h1>
                <p>See how far I have come by visiting some of my old websites.</p>

                <iframe className="iframe" title="Fido Feeder" src="https://fido-host-qqizf.ondigitalocean.app/tab3" />
                <iframe className="iframe"  title="Deep Dive" src="https://www.deepdive.camstanley.com"/>
                <iframe className="iframe"  title="College to Career" src="https://www.college2career.camstanley.com"/>
            </div>

            <div className="aboutSection2">
                
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#66FCF1" fill-opacity="1" d="M0,32L720,192L1440,0L1440,0L720,0L0,0Z"></path>
            </svg>
            </div>
            

        </div>
    );
}

export default About; 
