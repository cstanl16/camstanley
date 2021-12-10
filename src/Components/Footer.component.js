import React from 'react';

import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import linkedIn from '../Images/linkedIn.png';
import github from '../Images/github.png';
import twitter from '../Images/twitter.png';

function Footer() {
    return (
        <div className="footer">
            <div className="contact">
                <button className="iconButton" onClick={() => window.location.href = 'https://www.facebook.com'}>
                    <img className="icons" src={facebook} alt="" />
                </button>
                <button className="iconButton" onClick={() => window.location.href = 'https://www.instagram.com'}>
                    <img className="icons" src={instagram} alt="" />
                </button>
                <button className="iconButton" onClick={() => window.location.href = 'https://www.linkedin.com/in/cameron-stanley-372018b1/'}>
                    <img className="icons" src={linkedIn} alt="" />
                </button>
                <button className="iconButton" onClick={() => window.location.href = 'https://github.com/cstanl16'}>
                    <img className="icons" src={github} alt="" />
                </button>
                <button className="iconButton" onClick={() => window.location.href = 'https://twitter.com/camstan1995'}>
                    <img className="icons" src={twitter} alt="" />
                </button>
            </div>
            All rights reserved &copy; Cameron Stanley
        </div>
    );
}


export default Footer; 