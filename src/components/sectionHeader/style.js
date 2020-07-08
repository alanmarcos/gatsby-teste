import styled from 'styled-components'
import globals from '../globals'
const { mediaqueries } = globals
const { extraSmall, small } = mediaqueries

export const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: ${props => props.descMaxWidth ? `${props.descMaxWidth}px` : '840px'};
  padding-top:90px;
  padding-bottom:30px;

  @media ${extraSmall}, ${small}{
    padding-top:20px;
    padding-bottom:15px;
  }

  p {
    padding-left:30px;
    padding-right:30px;
    font-weight:100;
    font-size:25px;
    color:#9f9f9f;
  }

  img {
    margin-bottom: 0;
  }

  h2 {
    margin:.5em 0 .5em 0 !important;
    padding:0;
    color: ${globals.colors.darkBlue};
  }
`