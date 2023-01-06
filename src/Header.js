<<<<<<< Updated upstream
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
=======
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__in">
        <div className="header__LogoName">
            <span className="header__LogoNameIn">.in</span>
        </div>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
>>>>>>> Stashed changes
