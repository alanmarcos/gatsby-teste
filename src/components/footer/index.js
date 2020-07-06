import React from 'react'
import { FooterWrapper, FooterLine, FooterContactsWrapper, 
  FooterContacts, FooterLinksWrapper, SiteMap, Newsletter,
  NewsletterForm, LogosCredpagoWrapper, ContatosWrapper,
  ContatoWrapper  } from './style'
import Button from '../button/index'
import Input from '../input/index'
import RedesSociais from '../socialNetworks/index'

import LogoCredPagoNegativo from '../../images/logo-credpago-negativo.svg'
import LogoBtgNegativo from '../../images/logo-btg-negativo.svg'
import { ReactComponent as IconWhats } from '../../images/icons/whatsapp.svg'
import { ReactComponent as IconPhone } from '../../images/icons/phone2.svg'

const Footer = props => {

  return (
    <FooterWrapper>

      <FooterLinksWrapper>
        <FooterSitemap />
        <FooterNewsletter />
      </FooterLinksWrapper>

      <FooterContactsWrapper>
        <FooterContacts>
          <ContatosCredpago />
          <RedesSociais />
          <LogosCredpago />
        </FooterContacts>
      </FooterContactsWrapper>

      <FooterLine>
        <small>CredPago © {new Date().getFullYear()}. Todos os direitos reservados. </small>
      </FooterLine>
    </FooterWrapper>
  )
}

const FooterSitemap = props => {
  return (
    <SiteMap>
      <div>
        <h6>CredPago</h6>
        <ul>
          <li><a href="#">Sobre Nós</a></li>
          <li><a href="#">Como Funciona</a></li>
          <li><a href="#">Política de Privacidade</a></li>
          <li><a href="#">Encontre uma Imobiliária</a></li>
        </ul>
      </div>
      <div>
        <h6>Produtos</h6>
        <ul>
          <li><a href="#">Simulador de Locação</a></li>
          <li><a href="#">PontaPonta</a></li>
          <li><a href="#">CredSign</a></li>
          <li><a href="#">Análise Instantânea</a></li>
        </ul>
      </div>
      <div className="mainLinks">
        <h6>&nbsp;</h6>
        <ul>
          <li><a href="#">Blog CredPago</a></li>
          <li><a href="#">Central de Ajuda</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Cadastre-se</a></li>
        </ul>
      </div>
    </SiteMap>
  )
}

const FooterNewsletter = props => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit goes here');
    return false;
  }

  return (
    <Newsletter>
      <h6>Assine nossa Newsletter</h6>
      <small>Receba em primeira mão as principais novidades da CredPago.</small>
      <NewsletterForm
        onSubmit={handleSubmit}>

        <Input 
          htmlType="email"
          ghost={true}
          type="primary"
          size="large"
          name="email" />
        <Button 
          upperCase={true} 
          htmlType="submit" 
          type="primary" 
          size="large">Cadastrar</Button>

        <div className="feedbackWrapper">

        </div>
      </NewsletterForm>
    </Newsletter>
  )
}

const Contato = ({ title, smallDesc, children }) => {
  return (
    <ContatoWrapper>
      <div>
        {children}
      </div>
      <div>
        <small>{smallDesc}</small>
        <h5>{title}</h5>
      </div>
    </ContatoWrapper>
  )
}

const ContatosCredpago = props => {
  return (
    <ContatosWrapper>
      <Contato title="(47) 99936-0198" smallDesc="Atendimento Digital">
        <IconWhats />
      </Contato>
      <Contato title="0800 001 6002" smallDesc="De Segunda à Sexta">
        <IconPhone />
      </Contato>
    </ContatosWrapper>
  )
}

const LogosCredpago = props => {
  return (
    <LogosCredpagoWrapper>
      <ul>
        <li><img src={LogoCredPagoNegativo} alt="CredPago" width="106" height="42" /></li>
        <li><img src={LogoBtgNegativo} alt="BTG Pactual" width="121" height="47" /></li>
      </ul>
    </LogosCredpagoWrapper>
  )
}

export default Footer