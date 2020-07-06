import React from 'react'
import { Wrapper } from '../sectionHeader/style'
import { H2 } from '../headings/index'
import LinhaGo from '../../images/svg/linha-go.svg'
import CredpagoGo from '../../images/go.svg'
import { ProdutosWrapper, GoWrapper, Produtos, Produto } from './style'

import LogoSimulador from '../../images/logo-simulador-de-locacao.svg'
import LogoPontaPonta from '../../images/logo-ponta-ponta.svg'
import LogoCredSign from '../../images/logo-credsign.svg'
import LogoAnaliseInstantanea from '../../images/logo-analise-instantanea.svg'

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
          <img src={LogoSimulador} alt="Simulador de Locação" />
        </Produto>
        <Produto>
          <img src={LogoPontaPonta} alt="Simulador de Locação" />
        </Produto>
        <Produto>
          <img src={LogoCredSign} alt="Simulador de Locação" />
        </Produto>
        <Produto>
          <img src={LogoAnaliseInstantanea} alt="Simulador de Locação" />
        </Produto>
      </Produtos>
    </ProdutosWrapper>
  )
}

export default ProdutosCredpago