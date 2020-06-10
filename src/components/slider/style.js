import styled from 'styled-components'
import globals from '../globals'

export const SliderWrapper = styled.div`

  img {
    margin:0;
  }

  .awssld__bullets {
    bottom: 25px;
    z-index:500;

    button {
      background-color:#d7d7d7;

      &.awssld__bullets--active {
        background-color: ${globals.colors.lightblue};
      }
    }
  }  

  img.bottom-right {
    position: absolute;
    right:0;
    bottom:0;
    pointer-events: none;
    z-index: 150;
  }

  .awssld__content {

    & > div {
      width:100%;
      padding-left:130px;
      padding-left: 9vw;
    }
  }
`

export const Slide = styled.div`
  width:100%;
  display: block;
  max-width:1000px;

  & > div {
    align-self: flex-end;
  }
`

export const SlideTextWrapper = styled.div`
  max-width: 700px;
  z-index: 200;
  position: relative;
  color: ${globals.colors.darkblue};

  h1 {
    font-size: 4vw;
    margin-bottom:0;
    padding-bottom:0;
    font-family: ${globals.fonts.headings};
    font-weight: 800;

    & ~ p {
      margin-top:1.5em;
      margin-top:3vw;
    }
  }

  .looping-texts {
    margin-left:15px;

    span {
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ff0000+0,87e0fd+100 */
      background: #ff0000; /* Old browsers */
      background: linear-gradient(135deg,  #23c1ff 0%,#7be8ff 100%);
      color:white;
      padding:.2em .35em;
      border-radius:8px;
      font-weight: normal;
    }
  }

  p {
    font-size:1.4em;
  }
`