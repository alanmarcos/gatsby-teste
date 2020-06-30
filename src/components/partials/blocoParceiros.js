import React from 'react'
import { SectionHeader } from '../sectionHeader/index'
import PictoParceiros from '../../images/svg/picto-parceiros.svg'
import { MapaWrapper } from './style'

const BlocoParceiros = props => {

  return (
    <div>
      <SectionHeader 
        title="Parceiros" 
        desc="São mais de 10.000 imobiliárias parceiras que operam com CredPago por todo o Brasil."
        icon={PictoParceiros}
        />
      <MapaWrapper>
        <a href="#">
          <h6>Encontre a imobiliária mais próxima</h6>
        </a>
      </MapaWrapper>
    </div>
  )
}

export default BlocoParceiros