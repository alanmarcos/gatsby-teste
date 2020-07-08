import styled from 'styled-components'
import globals from '../globals'
export const headerHeight = '86px'
export const headerHeightMobile = '69px'
const { mediaqueries, colors, paddingSides } = globals
const { extraSmall, small } = mediaqueries

export const Header = styled.header`
  width:100%;
  height: ${headerHeight};
  padding: .5em ${paddingSides};
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  position: fixed;
  z-index:2000;
  transition: all .2s;
  background: ${props => props.bgColor ? props.bgColor : 'none'};
  box-shadow: ${props => props.bgColor ? '0 1px 5px 0 rgba(0,0,0,0.3)' : 'none'};

  @media ${extraSmall}, ${small}{
    padding: 0 ${paddingSides};
    height: ${headerHeightMobile};
  }

  *:focus {
    outline-color:#27c3ed;
  }
`

export const Menu = styled.nav`
  
  
  & > ul {
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    align-items: center;
    font-size:1.1em !important;
    
    & > li {
      margin:0;
      

      & + li {
        margin-left:30px;

        @media ${small}{
          margin-left:15px;
        }

        @media ${extraSmall}{
          margin-left:10px;
        }
      }
    }
  }

  .menu-item {

    a {
      color: ${colors.darkBlue};
      text-decoration:none;
      transition: all .2s;
      font-weight:bold;

      &:hover {
        color: ${colors.lightBlue};
      }
    }

    @media ${small}{
      display: none;
    }

    @media ${extraSmall}{
      display: none;
    }
  }

  .mobile-menu-link {
    display:none;

    @media ${small}, ${extraSmall}{
      display: list-item;
    }

    svg {
      width:auto;
      height:26px;
    }
  }

  button {
    border:none;
    padding:7px 10px 3px 10px;
    margin:0;
    background:none;

    &:hover {
      cursor:pointer;
    }
  }

  svg {
    width:auto;
    height:30px;

    & > * { 
      fill: url(#gradientIcons);
    }
  }
`

export const LogoWrapper = styled.h1`
  margin:0 !important;
  padding:0 !important;
  font-size: 0 !important;

  a {
    display:inline-flex;

    img {
      margin:0;
      border:0;
      padding:0;
      max-width:142px;

      @media ${extraSmall}, ${small}{
        max-width:102px;
      }
    }
  }
`