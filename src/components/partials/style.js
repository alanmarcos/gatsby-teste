import styled from 'styled-components'
import globals from '../globals'
import Mapa from '../../images/map-background.jpg'
const { mediaqueries } = globals

export const ComoFuncionaWrapper = styled.div`
  display:block;
  padding-bottom:2em;
  box-shadow: 0 9px 9px 0 rgba(0,0,0,0.15);
`

export const EtapasWrapper = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-gap:30px;
  width:100%;
  max-width: ${globals.containerMaxWidth};
  margin:0 auto 3em;

  @media ${mediaqueries.small}, ${mediaqueries.extraSmall}{
    grid-template-columns: 1fr;
  }

  p {
    line-height: ${globals.lineHeight};
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
    left:-35px;
    bottom:-35px;
    
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
      transform: translate3d(-50%, -50%, 0);
      text-align:center;
    }
  }

  .illustration-wrapper {
    height:300px;
    max-width:300px;
    margin:0 auto;

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

  &:before {
    content:"";
    background: url(${Mapa}) repeat-y center top;
    width:100%;
    height:100%;
    display:block;
    position: absolute;
    left:0;
    top:0;
    z-index:-1;
    opacity:0.6;
    animation: scroll 120s linear infinite;
  }

  a {
    align-self:center;
    margin:0 auto;
    background:#27c2ec;
    color:white;
    text-decoration:none;
    padding: 1.1em 2em;
    border-radius:6px;
    opacity:0.8;

    &:hover {
      opacity:1;
    }

    &:active {
      background:#24b3da;
    }

    & >* {
      margin:0;
      padding:0;
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

