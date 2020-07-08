import styled from 'styled-components'
import { lighten, darken } from 'polished'
import globals from '../globals'
import Mapa from '../../images/map-background.jpg'
import ParceiroBg from '../../images/parceiro-background.jpg'
import Lines from '../../images/svg/lines.svg'
const { mediaqueries, paddingSides, containerMaxWidth, lineHeight, colors } = globals
const { extraSmall, small } = mediaqueries

export const ComoFuncionaWrapper = styled.div`
  display:block;
  padding-bottom:2em;
  box-shadow: 0 9px 9px 0 rgba(0,0,0,0.15);
`

export const Etapa = styled.div`

`

export const EtapasWrapper = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-gap:30px;
  width:100%;
  max-width: ${containerMaxWidth};
  margin:0 auto 3em;
  padding: 0 ${paddingSides};

  @media ${small}, ${extraSmall}{
    grid-template-columns: 1fr;
  }

  p {
    line-height: ${lineHeight};
    max-width:320px;
    margin:0 auto;
    color: ${globals.colors.lightGray};
  }
`

export const EtapaHeaderWrapper = styled.div`
  position:relative;
  margin-bottom:2em;

  .number-wrapper {
    width:218px;
    position:absolute;
    left:50%;
    transform: translateX(-110%);
    bottom:-35px;

    @media ${small}, ${extraSmall}{
      width:182px;
    }
    
    img {
      pointer-events:none;
    }

    span {
      color:white;
      font-weight:800;
      font-size:70px;
      width: 238px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -59%, 0);
      text-align:center;

      @media ${small}, ${extraSmall}{
        font-size:60px;
        transform: translate3d(-50%, -60%, 0);
      }
    }
  }

  .illustration-wrapper {
    height:250px;
    max-width:300px;
    margin:0 auto;

    @media ${small}, ${extraSmall}{
      max-width:250px;
      height:200px;
    }

    img {
      max-width:90%;
      max-height:90%;
    }
  }
`

export const MapaWrapper = styled.div`
  height:400px;
  display:flex;
  position:relative;
  padding:0 ${paddingSides};

  @media ${extraSmall}, ${small}{
    height:240px;
  }

  &:before {
    content:"";
    background: url(${Mapa}) repeat-y center top;
    width:100%;
    height:100%;
    display:block;
    position: absolute;
    left:0;
    top:0;
    z-index:0;
    opacity:0.6;
    animation: scroll 120s linear infinite;
    filter: grayscale(1);
    pointer-events:none;
    will-change: background-position;
  }

  a {
    align-self:center;
    margin:0 auto;
    background:#27c2ec;
    color:white;
    text-decoration:none;
    padding: 1.1em 2em;
    border-radius:6px;
    opacity:0.9;
    position:relative;
    overflow: hidden;
    padding-left:96px;

    &:before {
      content:"";
      width:70px;
      height:100%;
      background:rgba(0,0,0,0.4);
      position:absolute;
      left:0;
      top:0;
      z-index:0;
    }

    &:active {
      background:#24b3da;
    }

    & > * {
      margin:0;
      padding:0;
      align-self:center;
    }

    svg {
      width:19px;
      height:28px;
      display:block;
      position:absolute;
      left:25px;
      top:50%;
      transform: translateY(-50%);
      z-index:1;

      & > * {
        fill: ${colors.yellow};
      }
    }

    h5 {

      @media ${extraSmall}, ${small}{
        margin:0 !important;
        padding:0 !important;
      }
    }
  }

  @-webkit-keyframes scroll {
    from {background-position: center top;}
    to {background-position: center top 1080px;}
  }

  @keyframes scroll {
    from {background-position: center top;}
    to {background-position: center top 1080px;}
  }
`

export const BlocoParceiroWrapper = styled.div`
  background: url(${ParceiroBg}) no-repeat right top #1dc1f1;
  height:210px;
  display:flex;

  @media ${extraSmall}, ${small}{
    background-position: left top;
    background-size: auto 100%;
    height:auto;
    padding-top:1em;
    padding-bottom:1em;
  }
`

export const BlocoParceiro = styled.div`
  align-self:center;
  margin:0 auto;
  max-width: ${containerMaxWidth};
  display:grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap:30px;
  padding-left: ${paddingSides};
  padding-right: ${paddingSides};

  @media ${extraSmall}, ${small}{
    grid-template-columns: 1fr;
    grid-gap:10px;
  }

  & > div {
    align-self:center;
  }

  .texts-wrapper {
    color:#18325a;

    p {
      max-width:800px;
      padding-bottom:0;
      margin-bottom:0;
    }
  }

  h4 {
    color:white;
    margin:0 !important;
    padding: 0 0 .4em 0 !important;
  }

  .UIButton {
    padding-left:5em;
    padding-right:5em;

    &:hover {
      opacity:1;
      background: ${lighten(0.2, colors.lightBlue)};
    }

    @media ${extraSmall}, ${small}{
      width:100%;
    }
  }
`

export const ParceirosWrapper = styled.div`
  padding-top:40px;
  background-color:#f7f8f8;
  box-shadow: inset 0 10px 10px 2px rgba(100,100,100,0.2);
`

export const ProdutosWrapper = styled.div`
  padding: 40px ${paddingSides};
  box-shadow: 0 9px 9px 0 rgba(0,0,0,0.15);

  h2 {
    padding-top:.4em;
    padding-bottom:.4em;
  }
`


export const GoWrapper = styled.div`
  margin:0 auto;
  max-width:330px;
  position: relative;

  .line {
    position:absolute;
    left:50%;
    top:50%;
    transform: translate3d(-50%, -50%, 0);
    z-index:-1;
  }

  .go {
    display:block;
    margin:0 auto;
  }
`

export const Produtos = styled.div`
  display:grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  max-width: ${globals.containerMaxWidth};
  margin:55px auto;
  grid-gap:30px;

  @media ${globals.small}, ${globals.extraSmall} {
    grid-gap:15px;
    grid-template-columns: repeat(2, minmax(0, 1fr))
  }
`

export const Produto = styled.div`
  text-align: center;
  align-self:center;

  img {
    margin:0 auto;
    display:block;
    max-height: 100px;
    max-width:170px;
    transition: all .2s;
    filter: grayscale(1);
    opacity:0.5;

    &:hover {
      filter: grayscale(0);
      opacity:1;
    }
  }
`

export const DepoimentosContainer = styled.div`
  width:100%;
  height:auto;
  padding-bottom:20px;
  overflow:hidden;
`

export const DepoimentosWrapper = styled.div`
  display:grid;
  grid-template-columns: 4fr 8fr;
  margin:0 auto;
  padding:0 ${paddingSides};
  max-width: ${containerMaxWidth};

  @media ${extraSmall}, ${small}{
    grid-template-columns: 1fr;
  }

  .header {
    align-self:center;
    text-align: center;

    img {
      margin:0;
    }

    .avatar-wrapper {
      position:relative;
      height: auto;
      display:block;

      .bg {
        max-width:308px;
        margin:0 auto;
      }

      .picture {
        border-radius:80px;
        position:absolute;
        left:50%;
        top:0;
        margin-top:35px;
        transform: translateX(-50%);
        display:block;
        box-shadow: 0 0 0 2px white;
      }
    }    

    h5 {
      font-weight:800;
    }

    h5, h6 {  
      margin:0 !important;
      padding:0 !important;
      color: ${globals.colors.darkBlue};
    }
  }

  .content {

    @media ${small}, ${extraSmall}{
      padding-top:20px;
    }
  }
`

export const LinesDivisor = styled.div`
  background:url(${Lines}) no-repeat center top;
  width:100%;
  height:0;
  padding-bottom:9%;
`

export const FAQWrapper = styled.div`
  margin:0 auto;
  padding:0 ${paddingSides} 5em;
  max-width: 1030px;

  @media ${small}{
    padding-bottom:2em;
  }
`