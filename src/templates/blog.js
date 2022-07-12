import React from "react";

import Layout from "../components/layout";

import { graphql } from "gatsby";

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        date
        title
      }
      html
    }
  }
`

const Blog = (props) => {

  return (
    <Layout>
      <div>
        <h3>{ props.data.markdownRemark.frontmatter.title }</h3>
        <p>
          <em>{ props.data.markdownRemark.frontmatter.date }</em>
        </p>
        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
        </div>
      </div>
    </Layout>
  )
};

export default Blog;