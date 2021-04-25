import React, {useState} from "react";
import menuIcon from "../img/menu.png";
// import menuIcon2 from "../img/menu2.png";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
    return (
      <header>
        <nav>
          <img src={menuIcon} onClick={()=>setShowLinks(!showLinks)} className="menu-icon" alt="menu-icon"/>
          <ul className="nav-menu" id={showLinks ? "hidden" : ""} >
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://yashwalia.hashnode.dev/" rel="noopener noreferrer" target="_blank">Blog</a></li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;
