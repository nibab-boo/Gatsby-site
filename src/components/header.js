import React from "react";

import { Link } from "gatsby";

// import "./../styles/header.module.scss";
import * as headerStyles from './../styles/header.module.scss';

const Header = () => {
  return (
    <div className={ headerStyles.header }>
      <h3 className={ headerStyles.title }>Babin Bohora</h3>
      <ul className={ headerStyles.navList}>
        <li>
          <Link className={ headerStyles.link } activeClassName={ headerStyles.activeLink }  to="/">Home</Link>
        </li>
        <li>
          <Link className={ headerStyles.link } activeClassName={ headerStyles.activeLink } to="/blog">Blogs</Link>
        </li>
        <li>
          <Link className={ headerStyles.link } activeClassName={ headerStyles.activeLink } to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
};

export default Header;