import React from "react";

import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "./../components/layout"
import * as blogsStyle from "./../styles/blogs.module.scss"

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              title
            }
          }
        }
      }
    }
  `)

  console.log("data", data);

  return (
    <Layout>
      <div>
        <h2>This is Blog Page.</h2>
        <p>
          These are some of my blogs.
        </p>
        <ol className={ blogsStyle.posts }>
          {
            data.allMarkdownRemark.edges.map ((edge) => {
              return (
                <li key={ edge.node.frontmatter.title } className={blogsStyle.post}>
                  <Link to={`/blog/${edge.node.fields.slug}`}>
                    <h2>
                      { edge.node.frontmatter.title }
                    </h2>
                    <p>
                      { edge.node.frontmatter.date }
                    </p>
                  </Link>
                </li>
              )
            })
          }
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage;