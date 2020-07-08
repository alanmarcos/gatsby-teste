import React from 'react'
import Button from '../button/index'
import { BlocoParceiroWrapper, BlocoParceiro } from './style'

const QueroSerParceiro = props => {

  return (
    <BlocoParceiroWrapper>
      <BlocoParceiro>
        <div>
          <div className="texts-wrapper">
            <h4>Quero ser parceiro CredPago</h4>
            <p>Se você é imobiliária e gostaria de operar com os produtos CredPago. Clique no botão ao lado e faça parte desta revolução.</p>
          </div>
        </div>
        <div>
          <Button type="secondary" upperCase={true}>
            <p>Cadastrar</p>
          </Button>
        </div>
      </BlocoParceiro>
    </BlocoParceiroWrapper>
  )
}

export default QueroSerParceiro