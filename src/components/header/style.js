import styled from 'styled-components'
import globals from '../globals'
export const headerHeight = '116px'

export const Header = styled.header`
  height: ${headerHeight};
  padding: .5em 1em;
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  position: relative;

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
    
    & > li {
      margin:0;
      

      & + li {
        margin-left:30px;
      }
    }
  }

  .menu-item {

    @media ${globals.mediaqueries.small}{
      display: none;
    }

    @media ${globals.mediaqueries.extraSmall}{
      display: none;
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
    height:40px;
  }
`

export const LogoWrapper = styled.h1`
  margin:0;
  padding:0;

  img {
    margin:0;
    border:0;
    padding:0;
  }
`