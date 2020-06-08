import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import FotoBruno from '../../images/banners/bruno.png'

const Slider = props => (
  <AwesomeSlider style={{ height: 'calc(100vh - 116px - 35px)' }}>
    <div style={{ background: 'white' }}>
      <div>
        <h1>Para Imobiliárias</h1>
        <p>Aluguel de imóveis de forma rápida, fácil e sem precisar de fiador.</p>
      </div>
      <img src={FotoBruno} alt="Bruno" />
    </div>
    <div>Slide 2</div>
  </AwesomeSlider>
);


export default Slider;