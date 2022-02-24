import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header_container">
      <div className="header_wrapper">
        <h1 className="header_logo">
          <Link to="/">PHONE STORE</Link>
        </h1>

        <div className=" header_icons">
          <div className="icon-item">
            <FavoriteBorderIcon />
          </div>
          <div className="icon-item">
            <ShoppingCartCheckoutIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
