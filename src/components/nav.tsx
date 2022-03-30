import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>{
    return(
        <div className="bg-gradient-to-r from-[#7303c0] to-[#ec38bc] min-h-[7vh] flex items-center justify-between">
            <div id="logo">
                <h2 className="text-white text-[2rem] font-poppins px-[4rem]">Reflection</h2>
            </div>
            <ul className="nav-links flex font-poppins w-[40%] justify-around text-white">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/api">Api Docs</Link></li>
                <li><Link to="/contact">Contact</Link></li>
               
            </ul>
        </div>
    )
}

export default Nav;