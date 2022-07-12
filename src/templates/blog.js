import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/layout";
import Head from "./../components/helmet"


export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug })
    {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData
            placeholderUrl
          }
          description
          title
        }
      }
    }
  }
`

const Blog = (props) => {

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log("node", node);
        const gatsbyImageData = node.data.target
        if (!gatsbyImageData) {
          // asset is not an image
          return null
        }
        const url = props.data.contentfulBlogPost.body.references[0].placeholderUrl.replace("%width%", 700).replace("%height%", 500);
        console.log(url);
        const alt = props.data.contentfulBlogPost.body.references[0].title;

        return <img alt={alt} src={url}/>
      },
    },
  }
  // console.log("props", props)
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title}/>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <h1>{props.data.contentfulBlogPost.publishedDate}</h1>
      {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options)}
    </Layout>
  )
};

export default Blog;