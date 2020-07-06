import styled from 'styled-components'
import globals from '../globals'
const { mediaqueries, paddingSides, colors } = globals
const { extraSmall, small, medium } = mediaqueries

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

  @media ${extraSmall}{
    padding-bottom: 10px;
  }
`

export const FooterContacts = styled.div`
  max-width: ${globals.containerMaxWidth};
  margin:0 auto;
  padding:0 ${paddingSides};
  display:flex;

  @media ${extraSmall}, ${small}{
    flex-direction:column;
  }
  
`

export const FooterLinksWrapper = styled.div`
  max-width: ${globals.containerMaxWidth};
  padding:0 ${paddingSides};
  margin:0 auto;
  display:grid;
  grid-template-columns: 7fr 5fr;
  grid-gap:15px;

  @media ${extraSmall}, ${small}{
    grid-template-columns: 1fr;
  }

  h6 {
    text-transform: uppercase;
    font-weight: 800;
  }
`

export const SiteMap = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 2fr;
  grid-gap:15px;

  @media ${extraSmall}{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  h6 {
    margin-bottom:5px;
  }

  .mainLinks {
    text-transform:uppercase;

    a {
      font-weight:400;
    }

    h6 {

      @media ${extraSmall}{
        display:none;
      }
    }
  }

  ul {
    list-style:none;
    margin:0;
    padding:0;

    a {
      color:white;
      font-weight:300;
      text-decoration:none;
      font-size:.9em;
      transition: color .2s;

      &:hover {
        color: ${colors.lightBlue};
      }
    }
  }
`

export const Newsletter = styled.div`

  h6 {
    margin-bottom:0;
    padding-bottom:0;
  }
`

export const NewsletterForm = styled.form`
  display:grid;
  grid-template-columns: minmax(0, 1fr) max-content;
  grid-gap:15px;
  margin-top:30px;

  @media ${extraSmall}{
    grid-template-columns: 1fr;
  }

  .feedbackWrapper {
    overflow:hidden;
    max-height:0px;
    display:block;
  }
`

export const LogosCredpagoWrapper = styled.div`

  ul {
    margin:0;
    padding:0;

    li {
      margin:0;
      padding: 0 15px 0 0;
      display: inline-block;
      position: relative;

      &:before {
        content:"";
        width:1px;
        height:90%;
        display:block;
        background: white;
        position:absolute;
        right:0;
        opacity:0.6;
        top:50%;
        transform:translateY(-50%);
      }

      & + li {
        margin-left:15px;
      }

      &:last-child {
        padding-right:0;

        &:before {
          display:none;
        }
      }
    }
  }

  img {
    margin:0;
    padding:0;
  }
`

export const ContatosWrapper = styled.div`
  display:grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap:20px;
  width:100%;
  max-width:620px;


  @media ${extraSmall}{
    grid-template-columns: 1fr;
  }
`

export const ContatoWrapper = styled.div`
  display: grid;
  grid-gap:10px;
  grid-template-columns: 40px minmax(0, 1fr);
  color: white;
  font-style: italic;

  svg > * {
    fill: white;
  }

  h5 {
    margin:0 !important;
    padding:0;
  }
`