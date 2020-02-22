import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="ui fixed inverted menu">
      <div className="ui container" id='karolinaFrostare'>
        <Link id="header" className="header item" to="/">
          Karolina Frostare
        </Link>

        <div className="right menu">
          <NavLink
            id="about-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/about"
          >
            Karro
          </NavLink>

          <NavLink
            id="projects-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/projects"
          >
            Visual work
          </NavLink>

          <NavLink
            id="cv-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/cv"
          >
            Workplaces
          </NavLink>

          <NavLink
            id="reviews-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/reviews"
          >
            Reviews
          </NavLink>

          <NavLink
            id="contacts-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
