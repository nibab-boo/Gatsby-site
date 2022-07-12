import React from "react";

import Layout from "./../components/layout";
import Head from "./../components/helmet"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="contact" />
      <div>
        <h2>
          Hello, Here is how to contact me.
        </h2>
        <p>
          To connect with me on facebook, <a href="www.facebook.com">babinbohora</a> .
        </p>
      </div>
    </Layout>
  )
};

export default ContactPage;