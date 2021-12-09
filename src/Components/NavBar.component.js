import '../App.css'
import React from 'react';

import {
    Link
  } from "react-router-dom";


function NavBar() {
    return (
        <nav className="menu">
            <ul>
                <li><Link className="navLink" to="/">Homepage</Link></li>
                <li><Link className="navLink" to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;