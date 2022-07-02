import React, { useState } from "react";
import SearchBox from "./SearchBox";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const cart = useSelector((state) => state.cart.cartTotalQuantity);
  const [navToggle, setNavToggle] = useState(false);
  const navStyle = `absolute top-20 right-0 px-5 py-10 bg-gray-700 h-screen  flex-col  justify-between
  md:flex md:space-y-0 md:relative md:top-0 md:right-0 md:p-0 md:flex-row md:h-full md:flex-grow md:justify-between md:items-center md:ml-10 md:bg-inherit`;

  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };
  return (
    <>
      <nav className="sticky top-0 px-5 flex justify-between items-center h-20 bg-indigo-800 drop-shadow-md z-20 ">
        {/* Logo */}
        <div>
          <a href="/" className="text-amber-500 text-2xl font-semibold ">
            GOLDEN<span className="text-black">SHOE</span>
          </a>
        </div>
        {/* This div and its children show up when screen's width >= 769px (md breakpoint) */}
        <div
          id="main-nav"
          className={!navToggle ? "hidden " + navStyle : navStyle}
        >
          {/* Search box */}
          <SearchBox />

          {/* Cart */}
          <Link to="/cart">
            <Badge
              overlap="rectangular"
              className="text-white"
              badgeContent={cart}
              color="secondary"
            >
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </div>

        {/* The hamburger icon to open/close the #main-nav when screen width < 768px (mobile devices) */}
        <button
          className="md:hidden text-white text-2xl "
          href=""
          onClick={handleNavToggle}
        >
          <FontAwesomeIcon
            id="toggle-menu-icon transition"
            icon={!navToggle ? faBars : faTimes}
          />
        </button>
      </nav>
    </>
  );
};

export default Nav;
