import React from 'react'
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
          <a>Cadastrar</a>
        </div>
      </BlocoParceiro>
    </BlocoParceiroWrapper>
  )
}

export default QueroSerParceiro