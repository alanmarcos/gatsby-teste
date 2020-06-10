import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import LinhaBackground from '../../images/banners/lines-bg-bruno.png'
import FotoBruno from '../../images/banners/bruno.png'
import { SliderWrapper, Slide, SlideTextWrapper } from './style'
import TextLoop from "react-text-loop"

const Slider = props => (

  <SliderWrapper>
    <AwesomeSlider style={{ height: 'calc(100vh - 116px - 35px)' }}>

      <Slide style={{ background: `url(${LinhaBackground}) no-repeat center center`, backgroundSize: '100% auto' }}>
          <SlideTextWrapper>
            <h1>
              Para  
              <TextLoop className="looping-texts">
                <span>Imobiliárias</span>
                <span>Proprietários</span>
                <span>Inquilinos</span>
              </TextLoop>              
            </h1>
            <p>Aluguel de imóveis de forma rápida, fácil e sem precisar de fiador.</p>
          </SlideTextWrapper>
          <img class="bottom-right" src={FotoBruno} alt="Bruno" />
      </Slide>

      <div>Slide 2</div>

    </AwesomeSlider>
  </SliderWrapper>
);


export default Slider;