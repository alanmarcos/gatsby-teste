import styled from 'styled-components'
import globals from '../globals'
const { colors, mediaqueries } = globals;

export const FaqQuestion = styled.dt`
  display:flex;
  cursor:pointer;
  color:${colors.darkBlue};
  font-weight:normal;
  
  h6 {
    margin:0;
    padding:.8em 0;

    @media ${mediaqueries.extraSmall}, ${mediaqueries.small} {
      padding: 0;
    }
  }

  .arrow {
    margin-left:auto;
    margin-right:0;
    align-self: center;

    & > * {
      fill: ${colors.darkBlue};
    }
  }
`

export const FaqAnswer = styled.dd`
  color: ${colors.lightGray};
  padding: 2em;

  @media ${mediaqueries.extraSmall}, ${mediaqueries.small} {
    padding: .8em;
  }

  p {
    max-width:780px;
    font-weight:300;
    margin:0;
  }
`

export const FaqItemWrapper = styled.div`
  border-bottom: 1px solid #dbdbdb;

  &:first-child {
    border-top: 1px solid #dbdbdb;
  }
`