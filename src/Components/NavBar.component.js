import '../App.css'
import React from 'react';
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo3 from '../Images/logo3.png';



function NavBar() {

    return (
        <Nav className="menu">
            <a href="https://www.camstanley.com">
                <img className="menuImg" alt="Cameron Stanley Software Engineer" src={logo3}/>
            </a>
            <div id="mobileNavContainer" className="mobileNavContainerHidden">

                <NavLink className={
                    (navData) => navData.isActive ? "navLinkActive" : "navLink" } 
                    to="/resume" >
                        Resume
                </NavLink>

                <NavLink className={
                    (navData) => navData.isActive ? "navLinkActive" : "navLink" } 
                    to="/about">
                    About
                </NavLink>

                <NavLink className={
                    (navData) => navData.isActive ? "navLinkActive" : "navLink" } 
                    to="/"  >
                        Home
                </NavLink>

            </div>
                

            <div className="menuToggleOff" id="mobileMenu" onClick={toggleHamburger}>
                <hr class="bar1"/>
                <hr class="bar2"/>
                <hr class="bar3"/>
            </div>

        </Nav>
    );
}

function toggleHamburger() {
    var a = document.getElementById("mobileNavContainer");
    var b = document.getElementById("mobileMenu");
    if (a.classList.contains("mobileNavContainerHidden") ) {
        a.setAttribute("class", "mobileNavContainer")
        b.setAttribute("class", "menuToggleOn")
    }
    else {
        a.setAttribute("class", "mobileNavContainerHidden")
        b.setAttribute("class", "menuToggleOff")
    }
    
}

export default NavBar;