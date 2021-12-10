import '../App.css'
import React from 'react';
import logo3 from '../Images/logo3.png';

import {
    Link
  } from "react-router-dom";


function NavBar() {
    return (
        <nav className="menu">

            <img className="menuImg" alt="" src={logo3}/>

                <Link className="navLink1" to="/">Homepage</Link>

                <Link className="navLink2" to="/about">About</Link>

                <Link className="navLink3" to="/resume">Resume</Link>

            <div className="menu-toggle" id="mobile-menu">
                <span class="bar"/>
                <span class="bar"/>
                <span class="bar"/>
            </div>

        </nav>
    );
}

export default NavBar;