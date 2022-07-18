import React from "react";
import "./SubHeader.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom"
import { useStateValue } from "./StateProvider"

function SubHeader() { 
  const [{ basket }] = useStateValue();
  
  return (
    <div className="subheader">
      <Link to="/">
      <img
          className="subheader__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="subheader__in">
        <div className="subheader__LogoName">
            <span className="subheader__LogoNameIn">.in</span>
        </div>
      </div>

      
        
      <div className="subheader__search">
        <input className="subheader__searchInput" type="text" />
        <SearchIcon className="subheader__searchIcon" />
      </div>

      <div className="subheader__nav">
        
          <div className="subheader__option">
            <span className="subheader__optionLineOne">Hello Guest</span>
            <span className="subheader__optionLineTwo">Sign In</span>
          </div>
        

        
          <div className="subheader__option">
            <span className="subheader__optionLineOne">Returns</span>
            <span className="subheader__optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="subheader__option">
          <span className="subheader__optionLineOne">Your</span>
          <span className="subheader__optionLineTwo">Prime</span>
        </div>

        <Link to="checkout">
        <div className="subheader__optionBasket">
            <ShoppingBasketIcon />
            <span className="subheader__optionLineTwo subheader__basketCount">
              {basket?.length}
            </span>
        </div>
        </Link>
          
        
      </div>
    </div>
  );
}

export default SubHeader;