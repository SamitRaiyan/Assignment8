import React, { useEffect, useState } from "react";
import "./Header.css";
import author from '../../Assignment8.json'
const Header = () => {
    
     
  return (
    <div className="header">
      <div className="headerBox">
        <h1>Samit Caffee</h1>
        <div className="links">
          <a href="">Home</a>
          <a href="">Blogs</a>
          <a href="">Contact Us</a>
        </div>

        <img src={author[3].authorPic} alt="" />
      </div>
    </div>
  );
};

export default Header;