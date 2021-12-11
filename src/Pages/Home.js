import React from 'react';
import logo3 from '../Images/logo3.png'
import react from '../Images/react.png'
import java from '../Images/java.png'
import javascript from '../Images/javascript.png'

function Home() {
    return (
        <div className="homePage">
            <div className="logoDiv" >
                <img src={ logo3 } alt ="" />
            </div>

            <div className="section1">
                <p>Hello, my name is </p> 
                <h1>Cameron Stanley</h1>

                <p>
                    I'm a software engineer graduating from UNCC in May of 2022. Currently 
                    looking for my first job in the field, I am excited to join a team where 
                    I can learn and work on interesting projects.
                </p>
            </div>  

            <div class="waves">
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,224L16,224C32,224,64,224,96,234.7C128,245,160,267,192,234.7C224,203,256,117,288,117.3C320,117,352,203,384,229.3C416,256,448,224,480,224C512,224,544,256,576,240C608,224,640,160,672,154.7C704,149,736,203,768,213.3C800,224,832,192,864,176C896,160,928,160,960,186.7C992,213,1024,267,1056,293.3C1088,320,1120,320,1152,272C1184,224,1216,128,1248,90.7C1280,53,1312,75,1344,85.3C1376,96,1408,96,1424,96L1440,96L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z" fill="#66FCF1" fill-opacity="1">
                    </path>
                </svg>
            </div>

            <div className="section2">

                <div className="language">
                    <img className="iconsHome" src={java} alt="" />
                    <h1>Java</h1>
                    <p>
                        I first started learning java in 2014 to make minecraft plugins and 
                        that sparked my interest in software development\
                    </p>
                </div>

                <div className="language">
                    <img className="iconsHome" src={javascript} alt="" />
                    <h1>Javascript</h1>
                    <p>
                        Though only learning javscript very recently, I have spent a lot of 
                        time learning it through using react. 
                    </p>
                </div>

                <div className="language">
                    <img className="iconsHome" src={react} alt="" />
                    <h1>React</h1>
                    <p>
                        After learning about react, I spent a lot of time in 
                        making different website from it.
                    </p>
                </div>

            </div>

            <div className="section3">
            </div>
        </div>
    );
}

export default Home; 