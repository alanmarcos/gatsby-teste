import styled from 'styled-components'
import globals from '../globals'

export const SocialNetworkList = styled.ul`
  display:flex;
  margin:0 auto;
  padding:0;
  align-self:center;
  
  li {
    display:inline-block;
    align-self:center;
    margin:0;
    padding:0;

    & + li {
      margin-left:1em;
    }

    svg {
      max-width:23px;
      max-height:25px;
      display:block;
      width:100%;

      & > * {
        fill: white;
        transition: fill .2s;
      }
    }

    a {
      
      &:hover {

        svg * {
          fill:${globals.colors.lightblue};
        }
      }
    }
  }
`