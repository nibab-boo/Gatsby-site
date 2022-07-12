import React from "react"

import { graphql, useStaticQuery } from "gatsby";

import * as footerStyle from "./../styles/footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query{
      site {
        siteMetadata {
          author
        }
      }
    }
  `)


  return (
    <div className={ footerStyle.footer }>
      <p>
        Created by { data.site.siteMetadata.author }. @copyright protected.
      </p>
    </div>
  )
};

export default Footer;