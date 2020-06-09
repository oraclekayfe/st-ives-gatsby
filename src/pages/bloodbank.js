import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BloodbankPage = () => (
  <Layout>
    <SEO title="Blood-Bank" />
    <h1>Hi from the Blood bank</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BloodbankPage
