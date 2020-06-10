import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import LinhaBackground from '../../images/banners/lines-bg-bruno.png'
import FotoBruno from '../../images/banners/bruno.png'
import { HomeAwesomeSlider, SliderWrapper, Slide, SlideTextWrapper } from './style'
import TextLoop from "react-text-loop"
import { H1 } from '../headings/index'

const Slider = props => (

  <SliderWrapper>
    <HomeAwesomeSlider>

      <Slide style={{ background: `url(${LinhaBackground}) no-repeat center center`, backgroundSize: '100% auto' }}>
          <SlideTextWrapper>
            <H1>
              Para  
              <TextLoop className="looping-texts">
                <span>Imobiliárias</span>
                <span>Proprietários</span>
                <span>Inquilinos</span>
              </TextLoop>              
            </H1>
            <p>Aluguel de imóveis de forma rápida, fácil e sem precisar de fiador.</p>
          </SlideTextWrapper>
          <img class="bottom-right foto-bruno" src={FotoBruno} alt="Bruno" />
      </Slide>

      <div>Slide 2</div>

    </HomeAwesomeSlider>
  </SliderWrapper>
);


export default Slider;