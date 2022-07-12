import React from "react";

import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "./../components/layout"
import * as blogsStyle from "./../styles/blogs.module.scss"

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title,
            publishedDate(formatString: "MMMM Do, YYYY"),
            slug
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
            data.allContentfulBlogPost.edges.map ((edge) => {
              return (
                <li key={ edge.node.title } className={blogsStyle.post}>
                  <Link to={`/blog/${edge.node.slug}`}>
                    <h2>
                      { edge.node.title }
                    </h2>
                    <p>
                      { edge.node.publishedDate }
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