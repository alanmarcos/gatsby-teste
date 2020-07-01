import React from 'react'
import { FooterWrapper, FooterLine, FooterContactsWrapper, 
  FooterContacts, FooterLinksWrapper } from './style'
import RedesSociais from '../socialNetworks/index'

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
    <div>
      Sitemap vai aqui
    </div>
  )
}

const FooterNewsletter = props => {
  return (
    <div>
      Newsletter vai aqui
    </div>
  )
}

const ContatosCredpago = props => {
  return (
    <div>
      Atendimento Digital (47) 99936-0198 <br />
      De segunda à sexta 0800 001 6002
    </div>
  )
}

const LogosCredpago = props => {
  return (
    <div>
      Logos vao aqui
    </div>
  )
}

export default Footer