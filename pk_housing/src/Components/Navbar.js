import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./NavStyle.css";
import {FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {

 
    const [click,setClick] = useState(false);
    const handleclick = () => setClick(!click);
  
    const [color,setcolor]= useState(false);
    const changeColor = () => {
      if (window.scrollY >= 100){
        setcolor(true);
      }else{
        setcolor(false);
      }
    };

    window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header-bg" : "header"}>
      <a href="/" className="logo">PK-Builders<sub>.com</sub></a>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Project">Project</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleclick}>
        {click ? (<FaBars size={20} style={{color: "#fff"}}/>) : (<FaTimes size={20} style={{color: "#fff"}}/>)}
      </div>
    </div>
  );
};

export default Navbar;

