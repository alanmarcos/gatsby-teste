import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout/index"
import SEO from "../components/seo"
import SliderHome from '../components/slider/home'
import BlocoComoFunciona from '../components/partials/comoFunciona'
import BlocoParceiros from '../components/partials/blocoParceiros'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <SliderHome />
    <BlocoComoFunciona />
    <BlocoParceiros />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
