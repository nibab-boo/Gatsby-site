import React from "react";

import { Link, graphql, useStaticQuery } from "gatsby";

// import "./../styles/header.module.scss";
import * as headerStyles from './../styles/header.module.scss';

const Header = () => {

  // using graphql for fetching metadata.
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);



  return (
    <div className={ headerStyles.header }>
      <h3 className={ headerStyles.title }>
        { data.site.siteMetadata.title }
      </h3>
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