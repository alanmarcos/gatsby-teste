import styled from 'styled-components'
import globals from '../globals'
import AwesomeSlider from 'react-awesome-slider'
const { mediaqueries } = globals
const { extraSmall, small, medium, large } = mediaqueries

export const HomeAwesomeSlider = styled(AwesomeSlider)`
  height: calc(100vh - 56px);

  @media ${small}{
    height: 600px;
  }

  @media ${extraSmall}{
    height: 500px;
  }
`

export const SliderWrapper = styled.div`
  box-shadow: 0 9px 9px 0 rgba(0,0,0,0.15);

  img {
    margin:0;
  }

  .awssld__bullets {
    bottom: 25px;
    z-index:500;

    button {
      background-color:#d7d7d7;

      &.awssld__bullets--active {
        background-color: ${globals.colors.lightBlue};
      }
    }
  }

  .foto-bruno {

    @media ${small}, ${extraSmall}{
      width:100% !important;
    }

    img {
      @media ${small}{
        transform: translateX(-3%);
        object-fit: contain !important;
        object-position: center bottom !important;
        bottom:0;
        max-width:610px;
        width:100%;
      }

      @media ${extraSmall}{
        transform: translateX(-2%);
        object-fit: contain !important;
        object-position: center bottom !important;
        max-width:320px;
        width:100%;
      }
    }
  }

  .bottom-right {
    position: absolute;
    right:0;
    bottom:0;
    pointer-events: none;
    z-index: 150;
    max-height: 100%;
  }

  .awssld__content {
    background-color: transparent;

    & > div {
      width:100%;
      padding-left:130px;
      padding-left: 9vw;

      @media ${small}{
        padding-left:40px;
        padding-right:40px;
        padding-top:130px;
        align-self:flex-start;
      }

      @media ${extraSmall}{
        padding-left:20px;
        padding-right:20px;
        padding-top:135px;
        align-self:flex-start;
      }
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
  color: ${globals.colors.darkBlue};

  @media ${large}{
    max-width:500px;
  }

  @media ${medium}{
    max-width:380px;
  }

  @media ${small}{
    max-width:100%;
    text-align: center;
  }

  @media ${extraSmall}{
    max-width:100%;
    text-align: center;
  }

  h1 {
    margin:0 !important;
    padding:0 !important;

    & ~ p {
      margin-top:1.5em;
      margin-top:3vw;
    }
  }

  .looping-texts {
    margin-left:.3em;

    span {
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ff0000+0,87e0fd+100 */
      background: #ff0000; /* Old browsers */
      background: linear-gradient(135deg,  #23c1ff 0%,#7be8ff 100%);
      color:white;
      padding:.15em .25em;
      border-radius:8px;
      font-weight: normal;
    }
  }

  p {
    font-size:1.4em;
  }
`