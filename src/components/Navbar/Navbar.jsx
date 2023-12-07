import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/logo.png";
import cart from "./images/cart.png";
import search from "./images/search.png";
import wishlist from "./images/wishlist.png";
import profile from "./images/profile.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  const handleSearchClick = () => {
    navigate("/search");
  };

  const handleWishlistClick = () => {
    navigate("/favourite");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleProfileClick = () => {
    navigate("/account");
  };

  return (
    <div className="navbar-con">
      <img src={logo} alt="logo" onClick={handleHomeClick} />
      <p>Semi Kanchi pattu</p>
      <p>Light weight pattu</p>
      <p>Soft Silk</p>
      <p>Pure Kanchi Pattu</p>
      <p>Exclusive Bridal wear</p>
      <p>Pure Kanjivaram Silk</p>
      <img src={search} alt="search" onClick={handleSearchClick} />
      <img src={wishlist} alt="wishlist" onClick={handleWishlistClick} />
      <img src={cart} alt="cart" onClick={handleCartClick} />
      <img src={profile} alt="profile" onClick={handleProfileClick} />
    </div>
  );
};

export default Navbar;
