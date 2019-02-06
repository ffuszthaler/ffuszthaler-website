import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./header.css";

const Header = ({ siteTitle }) => (
  <header>

    <div className="nav-item-div">
      <h1>
        <Link
          to="/"
          className="link-item"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>

    <div className="nav-item-div">
      <h2>
        <Link
          to="/projects"
          className="link-item"
        >
          Projects
        </Link>
      </h2>
    </div>

    <div className="nav-item-div">
      <h2>
        <Link
          to="/about"
          className="link-item"
        >
          About
        </Link>
      </h2>
    </div>

    <div className="nav-item-div">
      <h2>
        <Link
          to="/cv"
          className="link-item"
        >
          CV
        </Link>
      </h2>
    </div>

  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
