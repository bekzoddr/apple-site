import { React, memo, useState } from "react";
import "./navbar.css";
import { NAVBAR__LINKS } from "../../static/Index";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  let navLinks = NAVBAR__LINKS.map((el, index) => (
    <li key={index} className="nav__item">
      <a href="#">{el}</a>
    </li>
  ));
  let [toggle, setToogle] = useState(false);

  return (
    <div className="container">
      <nav className="navbar">
        <a href="#" className="logo">
          {" "}
          <FaApple />
        </a>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to={"/"}>
              <FaApple className="navLogo" />
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to={"/store"}>
              Store
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to={"/mac"}>
              Mac
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to={"/ipad"}>
              Ipad
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to={"/iphone"}>
              Iphone
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to={"/watch"}>
              Watch
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to={"/Vision"}>
              Vision
            </NavLink>
          </li>
          {navLinks}
          <div className="icons">
            <IoIosSearch className="search icon" />
            <MdOutlineShoppingBag className="lock icon" />
          </div>
        </ul>
        <button onClick={() => setToogle((p) => !p)} className="menu">
          <CiMenuFries />
        </button>
        <div className={`sidebar ${toggle ? "show" : ""}`}>
          <li className="nav__itemm">
            <NavLink to={"/"}>
              <FaApple className="navLogo" />
            </NavLink>
          </li>
          <li className="nav__itemm">
            <NavLink className="nav__link" to={"/store"}>
              Store
            </NavLink>
          </li>
          <li className="nav__itemm">
            <NavLink className="nav__link" to={"/mac"}>
              Mac
            </NavLink>
          </li>
          <li className="nav__itemm">
            <NavLink className="nav__link" to={"/ipad"}>
              Ipad
            </NavLink>
          </li>
          <li className="nav__itemm">
            <NavLink className="nav__link" to={"/iphone"}>
              Iphone
            </NavLink>
          </li>
          <li className="nav__itemm">
            <NavLink className="nav__link" to={"/watch"}>
              Watch
            </NavLink>
          </li>
          <li className="nav__itemm">
            <NavLink className="nav__link" to={"/Vision"}>
              Vision
            </NavLink>
          </li>
          {navLinks}
          <div className="icons">
            <IoIosSearch className="search icon" />
            <MdOutlineShoppingBag className="lock icon" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default memo(Navbar);
