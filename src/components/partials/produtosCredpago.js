import React from 'react'
import { Wrapper } from '../sectionHeader/style'
import { H2 } from '../headings/index'
import LinhaGo from '../../images/svg/linha-go.svg'
import CredpagoGo from '../../images/go.svg'
import { ProdutosWrapper, GoWrapper, Produtos, Produto } from './style'

const ProdutosCredpago = props => {

  return (
    <ProdutosWrapper>
      <Wrapper descMaxWidth={1000}>
        <GoWrapper>
          <img className="line" src={LinhaGo} width="330" alt="Linha" />
          <img className="go" src={CredpagoGo} width="55" height="55" alt="CredPago" />
        </GoWrapper>
        <H2>Produtos CredPago</H2>
        <p>Além da garantia locatícia, a CredPago tem diversos produtos para facilitar o dia a dia de imobiliárias e corretores. Tudo para  proporcionar uma melhor experiência para seus clientes.</p>
      </Wrapper>
      <Produtos>
        <Produto>
          <img src="//placehold.it/300x120" alt="Simulador de Locação" />
        </Produto>
        <Produto>
          <img src="//placehold.it/300x120" alt="Simulador de Locação" />
        </Produto>
        <Produto>
          <img src="//placehold.it/300x120" alt="Simulador de Locação" />
        </Produto>
        <Produto>
          <img src="//placehold.it/300x120" alt="Simulador de Locação" />
        </Produto>
      </Produtos>
    </ProdutosWrapper>
  )
}

export default ProdutosCredpago