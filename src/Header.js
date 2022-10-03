import React from 'react';
import Headroom from "react-headroom";
import "./Header.css";
// import { slide as Menu } from 'react-burger-menu';
// import Sidebar from './Sidebar'

function Header() { 
  
  return (
    <Headroom>
        <div className='header'>
        <div className="subheader__nav">
        
        <div className="subheader__option">
          <span className="All">All</span>
        </div>

        <div className="subheader__option">
          <span className="All">Fresh</span>
        </div>

        <div className="subheader__option">
          <span className="All">Electronics</span>
        </div>

        <div className="subheader__option">
          <span className="All">Amazon Pay</span>
        </div>

        <div className="subheader__option">
          <span className="All">Sell</span>
        </div>

        <div className="subheader__option">
          <span className="All">Gift Cards</span>
        </div>
        
        <div className="subheader__option">
          <span className="All">Amazon Buisness</span>
        </div>

        <div className="subheader__option">
          <span className="All">Buy Again</span>
        </div>
        
        <div className="subheader__option">
          <span className="All">Browsing History</span>
        </div>

        <div className="subheader__option">
          <span className="All">Baby</span>
        </div>

        <div className="subheader__option">
          <span className="All">Fresh</span>
        </div>

        <div className="subheader__option">
          <span className="All">Gift Ideas</span>
        </div>

        </div>   
        </div>
    </Headroom>
    
    
  );
}

export default Header;