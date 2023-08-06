import React from "react";
import { NavLink, useMatch } from "react-router-dom";

const LeftNav = () => {
  const matchHome = useMatch({
    path: "/",
    end: true, // Match only if it's the end of the path
  });

  const matchTrending = useMatch("/trending"); // Adjust the path as needed

  const matchProfile = useMatch({
    path: "/profil",
    end: true, // Match only if it's the end of the path
  });

  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink
            to="/"
            exact="true"
            className={`nav-link ${
              matchHome ? "active-left-nav" : "unselected"
            }`}
          >
            <img src="./img/icons/home.svg" alt="home icon" />
          </NavLink>
          <br />
          <NavLink
            to="/trending"
            exact="true"
            className={`nav-link ${
              matchTrending ? "active-left-nav" : "unselected"
            }`}
          >
            <img src="./img/icons/rocket.svg" alt="trending icon" />
          </NavLink>
          <br />
          <NavLink
            to="/profil"
            exact="true"
            className={`nav-link ${
              matchProfile ? "active-left-nav" : "unselected"
            }`}
          >
            <img src="./img/icons/user.svg" alt="user icon" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
