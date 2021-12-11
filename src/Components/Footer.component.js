import React from 'react';

import facebook from '../Images/facebook.png';
import linkedIn from '../Images/linkedIn.png';
import github from '../Images/github.png';
import twitter from '../Images/twitter.png';

function Footer() {
    return (
        <div className="footer">
            
            <div className="footerContainer">
                Social
                <hr className="footerLine"></hr>
                <p>
                    <a href='https://www.facebook.com' target="_blank"  rel="noopener noreferrer" className='clickableFooter'>
                        <img className="icons" src={facebook} alt="" /> &ensp;Facebook
                    </a>
                </p>
                <p>
                    <a  href='https://www.linkedin.com/in/cameron-stanley-372018b1/' target="_blank"  rel="noopener noreferrer" className='clickableFooter'>
                        <img className="icons" src={linkedIn} alt="" />&ensp; LinkedIn
                    </a>
                </p>
                <p> 
                    <a  href='https://github.com/cstanl16' target="_blank"  rel="noopener noreferrer" className='clickableFooter'>
                        <img className="icons" src={github} alt="" />&ensp; Github
                    </a>
                </p>
                <p>
                    <a  href='https://twitter.com/camstan1995' target="_blank"  rel="noopener noreferrer" className='clickableFooter'>
                        <img className="icons" src={twitter} alt="" /> &ensp;Twitter
                    </a>
                </p>

            </div>

            <div className="footerContainer">
                Contact
                <hr className="footerLine"></hr>
                <p>Cameron Stanley</p>
                <p className='clickableFooter'>camstan1995@yahoo.com</p>
                <p className='clickableFooter'>(910) 685-2250</p>
                <p>Charlotte, NC</p>

            </div>

            <div className="footerContainer">
                My Other Websites
                <hr className="footerLine"></hr>
                <a href="https://www.fidofeeder.camstanley.com" target="_blank" rel="noopener noreferrer"><p className='clickableFooter'>Fido Feeder</p></a>
                <a href="https://www.deepDive.camstanley.com" target="_blank" rel="noopener noreferrer"><p className='clickableFooter'>Deep Dive Music</p></a>
                <a href="https://www.college2career.camstanley.com" target="_blank" rel="noopener noreferrer"><p className='clickableFooter'>College to Career</p></a>
                <a href="https://www.deepDive.camstanley.com" target="_blank" rel="noopener noreferrer"><p className='clickableFooter'>Deep Dive Music</p></a>

            </div>


            <div className='copyright'>
                <p>All rights reserved &copy; Cameron Stanley</p>
            </div>
            
        </div>
    );
}


export default Footer; 