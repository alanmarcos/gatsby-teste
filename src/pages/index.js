import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout/index"
import Image from "../components/image"
import SEO from "../components/seo"
import SliderHome from '../components/slider/home'
import { H2 } from '../components/headings/index'
import comoFuncionaUrl from '../images/svg/picto-como-funciona.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SliderHome />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img style={{ maxWidth: 72 }} src={comoFuncionaUrl} alt="Como Funciona" />
      <H2>Como Funciona?</H2>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
