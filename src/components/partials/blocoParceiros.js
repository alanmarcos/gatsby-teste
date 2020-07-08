import React from 'react'
import { SectionHeader } from '../sectionHeader/index'
import PictoParceiros from '../../images/svg/picto-parceiros.svg'
import { MapaWrapper, ParceirosWrapper } from './style'
import { ReactComponent as Pin } from '../../images/icons/pin.svg'

const BlocoParceiros = props => {

  return (
    <ParceirosWrapper>
      <SectionHeader 
        title="Parceiros" 
        desc="São mais de 10.000 imobiliárias parceiras que operam com CredPago por todo o Brasil."
        descMaxWidth={960}
        icon={PictoParceiros}
        />
      <MapaWrapper>
        <a href="#">
          <div>
            <Pin />
          </div>
          <h5>Encontre a imobiliária mais próxima</h5>
        </a>
      </MapaWrapper>
    </ParceirosWrapper>
  )
}

export default BlocoParceiros