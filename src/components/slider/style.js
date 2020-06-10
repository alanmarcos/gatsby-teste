import styled from 'styled-components'
import globals from '../globals'
import AwesomeSlider from 'react-awesome-slider'

export const HomeAwesomeSlider = styled(AwesomeSlider)`
  height: calc(100vh - 116px - 35px);

  @media ${globals.mediaqueries.small}{
    height: 660px;
  }

  @media ${globals.mediaqueries.extraSmall}{
    height: 420px;
  }
`

export const SliderWrapper = styled.div`
  box-shadow: 0 9px 9px 0 rgba(0,0,0,0.15);
  margin-bottom:4em;

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

  img.foto-bruno {

    @media ${globals.mediaqueries.small}{
      transform: translateX(-13%);
      max-width:610px;
      width:100%;
    }

    @media ${globals.mediaqueries.extraSmall}{
      transform: translateX(-18%);
      max-width:320px;
      width:100%;
    }
  }

  img.bottom-right {
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

      @media ${globals.mediaqueries.small}{
        padding-left:70px;
        padding-right:70px;
        padding-top:50px;
        align-self:flex-start;
      }

      @media ${globals.mediaqueries.extraSmall}{
        padding-left:70px;
        padding-right:70px;
        padding-top:50px;
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
  color: ${globals.colors.darkblue};

  @media ${globals.mediaqueries.large}{
    max-width:500px;
  }

  @media ${globals.mediaqueries.medium}{
    max-width:420px;
  }

  @media ${globals.mediaqueries.small}{
    max-width:100%;
    text-align: center;
  }

  @media ${globals.mediaqueries.extraSmall}{
    max-width:100%;
    text-align: center;
  }

  h1 {

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