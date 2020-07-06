import React from 'react'
import SectionHeader from '../sectionHeader/index'
import { DepoimentosWrapper, DepoimentosContainer } from './style'
import SliderDepoimentos from '../slider/depoimentos'
import Background from '../../images/svg/splash1.svg'

import PictoDepoimentos from '../../images/svg/picto-depoimentos.svg'

const Depoimentos = props => {

  return (
    <DepoimentosContainer>
      <SectionHeader 
        title="Depoimentos"
        icon={PictoDepoimentos}
        />
      <DepoimentosWrapper>
        <div className="header">
          <div className="avatar-wrapper">
            <img 
              loading="lazy" 
              className="bg" 
              src={Background} 
              alt="Imagem de Fundo" 
              aria-hidden="true" />
            <img 
              loading="lazy" 
              className="picture" 
              src="http://placehold.it/160x160" 
              alt="Henrique Fuhro Souto" 
              width="160" 
              height="160" />
          </div>
          <h5>Henrique Fuhro Souto</h5>
          <h6>Diretor Fuhro Souto</h6>
        </div>
        <div className="content">
          <SliderDepoimentos />
        </div>
      </DepoimentosWrapper>
    </DepoimentosContainer>
  )
}

export default Depoimentos