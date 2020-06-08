import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import LinhaBackground from '../../images/banners/lines-bg-bruno.png'
import FotoBruno from '../../images/banners/bruno.png'

const Slider = props => (
  <AwesomeSlider style={{ height: 'calc(100vh - 116px - 35px)' }}>

    <div style={{ background: `url(${LinhaBackground}) no-repeat center center white` }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', alignItems: 'center' }}>
        <div style={{ paddingLeft: 130 }}>
          <h1>Para Imobiliárias</h1>
          <p>Aluguel de imóveis de forma rápida, fácil e sem precisar de fiador.</p>
        </div>
        <img src={FotoBruno} alt="Bruno" />
      </div>
    </div>

    <div>Slide 2</div>

  </AwesomeSlider>
);


export default Slider;