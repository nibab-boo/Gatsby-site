import React from "react"

import { graphql, useStaticQuery } from "gatsby";

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
    <div>
      <p>
        Created by { data.site.siteMetadata.author }. @copyright protected.
      </p>
    </div>
  )
};

export default Footer;