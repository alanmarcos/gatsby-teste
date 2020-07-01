import React from "react"

import Layout from "../components/layout/index"
import SEO from "../components/seo"
import SliderHome from '../components/slider/home'
import ComoFunciona from '../components/partials/comoFunciona'
import Parceiros from '../components/partials/blocoParceiros'
import QueroSerParceiro from '../components/partials/queroSerParceiro'
import ProdutosCredpago from '../components/partials/produtosCredpago'
import Depoimentos from '../components/partials/depoimentos'
import PerguntasFrequentes from '../components/partials/faq'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <SliderHome />
    <ComoFunciona />
    <Parceiros />
    <QueroSerParceiro />
    <ProdutosCredpago />
    <Depoimentos />
    <PerguntasFrequentes />
  </Layout>
)

export default IndexPage
