import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="Main_div">
      <div className="image">
        <img
          src="https://zyan.vercel.app/images/logo.png"
          style={{ width: 225 }}
          alt=""
        />
      </div>
      <div className="navbar">
        <ul>
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                Home
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Home 1</a>
                <a href="#">Home 2</a>
                <a href="#">Home 3</a>
                <a href="#">Home 3</a>
                <a href="#">Home RTL</a>
              </div>
            </div>{" "}
          </li>
          <li>About Us</li>
          <li>Services</li>
          <li>Projets</li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                Blog
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Blog List</a>
                <a href="#">Blog Details</a>
              </div>
            </div>{" "}
          </li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="bars">
      <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default Header;
