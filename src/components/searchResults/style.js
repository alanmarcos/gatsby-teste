import styled from 'styled-components'
import { headerHeight } from '../header/style'

export const SearchResultsWrapper = styled.section`
  width:100%;
  height: 100%;
  display:block;
  position: absolute;
  left:0;
  top:0;
  opacity: ${props => props.query ? 1 : 0};
  pointer-events: ${props => props.query ? 'auto' : 'none'};
  transform: translateY(${(props => props.query ? '0' : '-80px')});
  transition: all .2s;
  background:rgba(255,255,255,0.9);
`