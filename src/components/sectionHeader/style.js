import styled from 'styled-components'

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

  h2 {
    margin:0;
    padding:0;
  }
`