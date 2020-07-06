import styled from 'styled-components'
import globals from '../globals'

export const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: ${props => props.descMaxWidth ? `${props.descMaxWidth}px` : '840px'};

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
    margin:0 0 .5em 0;
    padding:0;
    color: ${globals.colors.darkBlue};
  }
`