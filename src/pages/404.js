import React from "react";

import { Link } from "gatsby";

import Layout from "../components/layout";

const NotFound = () => {
  return (
    <Layout>
      <h2>
        Page Not Found
      </h2>
      <p>
        <Link to="/">
          Head Home
        </Link>
      </p>
    </Layout>
  )
};

export default NotFound;
