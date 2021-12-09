import React from 'react';

function About() {
    return (
        <div>
            <div className="body">
                <div>
                    <h1>Visit My Other Sites!</h1>
                    <p>See how far i have come by visiting some of my old websites.</p>
                </div>

            <button className="iconButton" onClick={() => window.location.href = 'https://twitter.com/camstan1995'}>
                <iframe className="iframe" src="https://fido-host-qqizf.ondigitalocean.app/tab3" />
            </button>
            
            <iframe className="iframe" src="https://deep-dive-music-c5gdi.ondigitalocean.app/" />
            </div>
        </div>
    );
}

export default About; 