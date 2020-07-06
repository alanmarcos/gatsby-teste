import React from 'react'
import Video from '../video/index'
import { DepoimentoWrapper, DepoimentosSlider, DepoimentoSlide } from './style'

const SliderDepoimentos = props => {

  const debug = (state) => {
    console.log('Debug', state)
    console.log('------------');
  }

  return (
    <DepoimentoWrapper>
      <DepoimentosSlider
        onFirstMount={debug}
        bullets={false}
        >
        <DepoimentoSlide>
          <Video youtubeId="fBM6vtrkhrA" />
        </DepoimentoSlide>
        <DepoimentoSlide>
          <Video youtubeId="mlB4gZocdyg" />
        </DepoimentoSlide>        
      </DepoimentosSlider>
    </DepoimentoWrapper>
  )
}

export default SliderDepoimentos