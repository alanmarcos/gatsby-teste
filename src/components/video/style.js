import styled, { keyframes } from 'styled-components'

const shine = keyframes`
  0% {
    background-position: -100px;
  }
  40%, 100% {
    background-position: 1140px;
  }
`

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 280px);
  background-size: 1500px;
  border-radius:3px;
  overflow:hidden;
  animation: ${shine} 2s infinite ease-out;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`