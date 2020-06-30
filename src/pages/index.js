import React from "react"

import Layout from "../components/layout/index"
import SEO from "../components/seo"
import SliderHome from '../components/slider/home'
import BlocoComoFunciona from '../components/partials/comoFunciona'
import BlocoParceiros from '../components/partials/blocoParceiros'
import BlocoQueroSerParceiro from '../components/partials/queroSerParceiro'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <SliderHome />
    <BlocoComoFunciona />
    <BlocoParceiros />
    <BlocoQueroSerParceiro />
  </Layout>
)

export default IndexPage
