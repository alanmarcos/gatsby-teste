import styled from 'styled-components'
import globals from '../globals'

export const FooterWrapper = styled.footer`
  background:#18325a;
  color:white;
`

export const FooterLine = styled.div`
  text-align:center;
  background:#52627b;
  display:block;
  padding:10px 15px;
  color:white;
`

export const FooterContactsWrapper = styled.div`
  border-top:1px solid #1e4d74;
  padding-top:25px;
  padding-bottom:40px;
`

export const FooterContacts = styled.div`
  max-width: ${globals.containerMaxWidth};
  margin:0 auto;
  display:flex;
`

export const FooterLinksWrapper = styled.div`
  max-width: ${globals.containerMaxWidth};
  margin:0 auto;
`