import styled from 'styled-components'
import { headerHeight } from '../header/style'

export const SearchResultsWrapper = styled.section`
  width:100%;
  height: 100%;
  display:block;
  position: absolute;
  left:0;
  top:0;
  opacity: ${props => props.isActive ? 1 : 0};
  pointer-events: ${props => props.isActive ? 'auto' : 'none'};
  transform: translateY(${props => props.isActive ? '0' : '-80px'});
  transition: all .2s;
  z-index:8000;
`

export const SearchResultsBackDrop = styled.div`
  position:fixed;
  left:0;
  top:0;
  background:rgba(255,255,255,0.2);
  width:100%;
  height:100vh;
  z-index:900;
`

export const SearchContainer = styled.div`
  height:${headerHeight};
  background:rgba(255,255,255,0.9);
  position:relative;
  z-index:1000;
`

export const ResultsContainer = styled.div`
  position:relative;
  z-index:1000;
`